import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciopantallaPage } from './iniciopantalla.page';

describe('IniciopantallaPage', () => {
  let component: IniciopantallaPage;
  let fixture: ComponentFixture<IniciopantallaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciopantallaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
