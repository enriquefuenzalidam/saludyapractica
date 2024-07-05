import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorasolicitudPage } from './horasolicitud.page';

describe('HorasolicitudPage', () => {
  let component: HorasolicitudPage;
  let fixture: ComponentFixture<HorasolicitudPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HorasolicitudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
