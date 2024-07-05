import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusquedamapaPage } from './busquedamapa.page';

describe('BusquedamapaPage', () => {
  let component: BusquedamapaPage;
  let fixture: ComponentFixture<BusquedamapaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedamapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
