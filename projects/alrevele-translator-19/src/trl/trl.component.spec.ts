import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrlComponent } from './trl.component';

describe('TrlComponent', () => {
  let component: TrlComponent;
  let fixture: ComponentFixture<TrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
