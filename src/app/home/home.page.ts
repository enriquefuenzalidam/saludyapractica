import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    new Swiper('.swiper', {
      // Initialize Swiper with options
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // Make the dots clickable
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>'; // Default is bullets
          }
      },
      loop: true,
      centeredSlides: true,
      speed: 400,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      slidesPerView: 1
    });
  }
}
