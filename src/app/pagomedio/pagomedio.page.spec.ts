import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagomedioPage } from './pagomedio.page';

describe('PagomedioPage', () => {
  let component: PagomedioPage;
  let fixture: ComponentFixture<PagomedioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagomedioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
