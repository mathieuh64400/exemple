import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurIndexComponent } from './utilisateur-index.component';

describe('UtilisateurIndexComponent', () => {
  let component: UtilisateurIndexComponent;
  let fixture: ComponentFixture<UtilisateurIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
