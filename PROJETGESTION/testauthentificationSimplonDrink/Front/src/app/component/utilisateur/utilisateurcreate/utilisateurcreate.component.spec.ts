import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurcreateComponent } from './utilisateurcreate.component';

describe('UtilisateurcreateComponent', () => {
  let component: UtilisateurcreateComponent;
  let fixture: ComponentFixture<UtilisateurcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurcreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
