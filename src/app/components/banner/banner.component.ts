import { Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit } from '@angular/core';
import { IonRow, IonicSlides } from '@ionic/angular/standalone';
import { Banner } from 'src/app/interfaces/banner.interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  imports: [IonRow],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannerComponent  implements OnInit {

  swiperModules = [IonicSlides];
  bannerImages?: any[] = [
    { id: '1', banner: 'assets/banners/1.webp', active: true, restaurant_id: '1' },
    { id: '2', banner: 'assets/banners/2.webp', active: true, },
    { id: '3', banner: 'assets/banners/3.webp', active: true, },
  ]

  constructor() { }

  ngOnInit() {}

}