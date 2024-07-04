import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  private currentSlideIndex: number = 0;

  constructor() {}

  ngAfterViewInit() {
    new Swiper('.swiper', {
      loop: true,
      centeredSlides: true,
      speed: 400,
      slidesPerView: 1,
      on: {
        transitionEnd: () => {
          this.currentSlideIndex = (this.currentSlideIndex + 1) % 3; // Assuming you have 3 slides
          this.updatePagination(this.currentSlideIndex);
        },
      },
    });
  }

  updatePagination(index: number) {
    const indicators = document.querySelectorAll('.pagination-indicator');
    indicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.remove('w-3', 'md:w-4', 'lg:w-5', 'bg-[#D8E8E7]', 'dark:bg-[#8C8586]');
        indicator.classList.add('w-8', 'md:w-10', 'lg:w-12', 'bg-black', 'dark:bg-black');
      } else {
        indicator.classList.remove('w-8', 'md:w-10', 'lg:w-12', 'bg-black', 'dark:bg-black');
        indicator.classList.add('w-3', 'md:w-4', 'lg:w-5', 'bg-[#D8E8E7]', 'dark:bg-[#8C8586]');
      }
    });
  }
}

