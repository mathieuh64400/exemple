import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateureditComponent } from './utilisateuredit.component';

describe('UtilisateureditComponent', () => {
  let component: UtilisateureditComponent;
  let fixture: ComponentFixture<UtilisateureditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateureditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateureditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
