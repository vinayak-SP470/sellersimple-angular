import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  activeItem: string = 'home'; 

  constructor(private router: Router) {}
  ngOnInit(): void {
   this.activeItem =  this.getActiveItem()
  }

  images = [
    '../../assets/img/slider-1.png',
    '../../assets/img/slider-3.png',
    '../../assets/img/slider-4.png'
  ];

  testimonialData = [
    {
      imageUrl: '../../assets/img/testimonial-img-01.png',
      testimonial: 'I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all.',
      ratingArray: Array(3).fill(''),
      emptyRatingArray: Array(2).fill(''),
      name: 'Heather Bennet',
      position: 'CEO, Retail Net, USA'
    },
    {
      imageUrl: '../../assets/img/testimonial-img-02.png',
      testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum voluptatem dolore veniam ea rem aliquid iure totam quo, ex quod id corrupti facilis adipisci tempore rerum iste dolorem dolores.',
      ratingArray: Array(4).fill(''),
      emptyRatingArray: Array(1).fill(''),
      name: 'Heather Bennet',
      position: 'CEO, Retail Net, USA'
    },
  ];

  setActive(item: string) {
    this.activeItem = item;
  }

  isActive(item: string): boolean {
    return this.activeItem === item;
  }

  private getActiveItem(): string {
    const url = this.router.url;
    if (url === '/signin') {
      return 'signin';
    } else if (url === '/faq') {
      return 'faq';
    } else if (url === '/pricing') {
      return 'pricing';
    } else if (url === '/contactus') {
      return 'contactus';
    } else {
      return 'home';
    }
  }
}
