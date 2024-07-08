import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-busquedamapa',
  templateUrl: './busquedamapa.page.html',
  styleUrls: ['./busquedamapa.page.scss'],
})
export class BusquedamapaPage implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Mapa de búsqueda | SaludYa');
  }

}
