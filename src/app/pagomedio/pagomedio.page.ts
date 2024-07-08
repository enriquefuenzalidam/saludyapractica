import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pagomedio',
  templateUrl: './pagomedio.page.html',
  styleUrls: ['./pagomedio.page.scss'],
})
export class PagomedioPage implements OnInit {

  constructor( private titleService: Title) { }

  ngOnInit() { this.titleService.setTitle('Inicio | SaludYa');
  }

}
