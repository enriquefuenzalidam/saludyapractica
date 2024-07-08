import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-horasolicitud',
  templateUrl: './horasolicitud.page.html',
  styleUrls: ['./horasolicitud.page.scss'],
})
export class HorasolicitudPage implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Solicitud de hora | SaludYa');
  }

}
