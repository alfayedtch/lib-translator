# @alrevele/translator

Une librairie Angular pour gérer les traductions dynamiques de votre application avec support multi-langues.

## Installation

```bash
npm install @alrevele/translator
```

## Configuration Rapide

### 1. Importer le Module

Dans votre `app.module.ts` ou composant standalone :

```typescript
import { AlreveleTranslatorModule } from '@alrevele/translator';

@NgModule({
  imports: [
    AlreveleTranslatorModule
  ]
})
export class AppModule { }
```

### 2. Initialiser les Traductions

Dans votre template principal (ex: `app.component.html`) :

```html
<lib-alreveleTranslator 
  [language]="'fr'" 
  [software_key]="'votre-cle-logiciel'"
  [env]="'production'">
</lib-alreveleTranslator>
```

## Utilisation

### Méthode 1 : Avec le Composant

```html
<lib-trl [key]="'HOME'"></lib-trl>
<lib-trl [key]="'WELCOME_MESSAGE'"></lib-trl>
```

### Méthode 2 : Avec le Pipe (Recommandé)

```html
<h1>{{ 'HOME' | trl }}</h1>
<p>{{ 'WELCOME_MESSAGE' | trl }}</p>
<button [title]="'TOOLTIP_TEXT' | trl">
  {{ 'BUTTON_LABEL' | trl }}
</button>
```

## Paramètres

### `lib-alreveleTranslator`

| Paramètre | Type | Requis | Défaut | Description |
|-----------|------|--------|--------|-------------|
| `language` | `string` | ✅ | - | Code de la langue (ex: 'fr', 'en') |
| `software_key` | `string` | ✅ | - | Clé unique de votre logiciel |
| `env` | `'local' \| 'production'` | ❌ | `'production'` | Environnement d'exécution |

### Paramètre `env`

Le paramètre `env` contrôle le comportement d'affichage des traductions manquantes :

- **`'local'`** : Affiche le nom de la clé si la traduction n'existe pas (utile en développement)
- **`'production'`** : Affiche une chaîne vide si la traduction n'existe pas

#### Exemple en Développement

```html
<lib-alreveleTranslator 
  [language]="'fr'" 
  [software_key]="'xxx'"
  [env]="'local'">
</lib-alreveleTranslator>

{{ 'CLE_INEXISTANTE' | trl }}
<!-- Affiche: CLE_INEXISTANTE -->
```

#### Exemple en Production

```html
<lib-alreveleTranslator 
  [language]="'fr'" 
  [software_key]="'xxx'"
  [env]="'production'">
</lib-alreveleTranslator>

{{ 'CLE_INEXISTANTE' | trl }}
<!-- Affiche: (vide) -->
```

## Changement de Langue Dynamique

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <lib-alreveleTranslator 
      [language]="currentLanguage" 
      [software_key]="softwareKey"
      [env]="'local'">
    </lib-alreveleTranslator>
    
    <select [(ngModel)]="currentLanguage">
      <option value="fr">Français</option>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
    
    <h1>{{ 'WELCOME' | trl }}</h1>
  `
})
export class AppComponent {
  currentLanguage = 'fr';
  softwareKey = 'votre-cle-logiciel';
}
```

Les traductions se mettent à jour automatiquement lors du changement de langue.

## Utilisation avec les Environnements Angular

```typescript
// environment.ts (développement)
export const environment = {
  production: false,
  translationEnv: 'local' as const,
  softwareKey: 'dev-key'
};

// environment.prod.ts (production)
export const environment = {
  production: true,
  translationEnv: 'production' as const,
  softwareKey: 'prod-key'
};
```

```html
<lib-alreveleTranslator 
  [language]="language" 
  [software_key]="environment.softwareKey"
  [env]="environment.translationEnv">
</lib-alreveleTranslator>
```

## Import Standalone

Pour les composants standalone, vous pouvez importer directement le pipe :

```typescript
import { TrlPipe } from '@alrevele/translator';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [TrlPipe],
  template: `
    <h1>{{ 'TITLE' | trl }}</h1>
    <p>{{ 'DESCRIPTION' | trl }}</p>
  `
})
export class ExampleComponent { }
```

## Avantages du Pipe

✅ **Syntaxe concise** : `{{ 'KEY' | trl }}` au lieu de `<lib-trl [key]="'KEY'"></lib-trl>`

✅ **Utilisable dans les attributs** : `[title]="'TOOLTIP' | trl"`

✅ **Combinable avec d'autres pipes** : `{{ 'TEXT' | trl | uppercase }}`

✅ **Réactif** : Mise à jour automatique lors du changement de langue

## API

### AlreveleTranslatorService

Service injectable pour gérer les traductions :

```typescript
import { AlreveleTranslatorService } from '@alrevele/translator';

constructor(private translatorService: AlreveleTranslatorService) {
  // Changer la langue
  this.translatorService.changeLanguage('en');
  
  // Changer l'environnement
  this.translatorService.setEnvironment('local');
  
  // S'abonner aux changements de langue
  this.translatorService.currentLanguage.subscribe(lang => {
    console.log('Langue actuelle:', lang);
  });
}
```

## Build

```bash
ng build alrevele-translator
```

## Publication

```bash
cd dist/alrevele-translator
npm publish
```

## Support

Pour toute question ou problème, veuillez créer une issue sur le dépôt GitHub.

## Licence

MIT

---

**Version** : 19.2.6  
**Angular** : ^18.0.0
