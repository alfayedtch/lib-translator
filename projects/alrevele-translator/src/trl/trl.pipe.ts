import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlreveleTranslatorService } from '../lib/alrevele-translator.service';

@Pipe({
    name: 'trl',
    standalone: true,
    pure: false // Important: permet au pipe de se mettre à jour lors des changements de langue
})
export class TrlPipe implements PipeTransform, OnDestroy {
    private languageSubscription: Subscription | undefined;
    private environmentSubscription: Subscription | undefined;
    private currentLanguage: string | undefined;
    private currentEnvironment: 'local' | 'production' = 'production';

    constructor(
        private alreveleService: AlreveleTranslatorService,
        private cdr: ChangeDetectorRef
    ) {
        // S'abonner aux changements de langue
        this.languageSubscription = this.alreveleService.currentLanguage.subscribe(
            (language) => {
                this.currentLanguage = language;
                // Forcer la détection de changements pour mettre à jour les traductions
                this.cdr.markForCheck();
            }
        );

        // S'abonner aux changements d'environnement
        this.environmentSubscription = this.alreveleService.currentEnvironment.subscribe(
            (env) => {
                this.currentEnvironment = env;
                this.cdr.markForCheck();
            }
        );
    }

    transform(key: string): string {
        if (!key) {
            return '';
        }

        try {
            // Récupérer les traductions depuis le sessionStorage
            const translationsJson = sessionStorage.getItem('alrevele-traduction');

            if (!translationsJson) {
                return this.currentEnvironment === 'local' ? key : '';
            }

            const translations = JSON.parse(translationsJson);

            // Trouver la traduction correspondant à la clé
            const translation = translations.find(
                (item: { key: string; translation: string }) => item.key === key
            );

            if (translation?.translation) {
                return translation.translation;
            } else {
                // Si la traduction n'existe pas ou est vide
                return this.currentEnvironment === 'local' ? key : '';
            }
        } catch (error) {
            console.error('Erreur lors de la récupération de la traduction:', error);
            return this.currentEnvironment === 'local' ? key : '';
        }
    }

    ngOnDestroy(): void {
        // Se désabonner pour éviter les fuites mémoire
        if (this.languageSubscription) {
            this.languageSubscription.unsubscribe();
        }
        if (this.environmentSubscription) {
            this.environmentSubscription.unsubscribe();
        }
    }
}
