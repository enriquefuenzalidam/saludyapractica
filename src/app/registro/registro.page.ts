import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor( private titleService: Title) { }

  ngOnInit() { this.titleService.setTitle('Cree su cuenta de usuario | SaludYa');
  }

}
