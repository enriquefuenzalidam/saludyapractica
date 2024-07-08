import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-iniciopantalla',
  templateUrl: './iniciopantalla.page.html',
  styleUrls: ['./iniciopantalla.page.scss'],
})
export class IniciopantallaPage implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Inicio | SaludYa');
  }

}
