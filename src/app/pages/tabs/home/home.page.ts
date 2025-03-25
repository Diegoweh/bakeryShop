import { Component, OnInit, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonSearchbar, IonLabel, IonIcon, IonButton, IonText, IonCol, IonRow } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cart, chevronDownOutline, notifications, options, location } from 'ionicons/icons';
import { ListHeadingComponent } from 'src/app/components/list-heading/list-heading.component';
import { BannerComponent } from "../../../components/banner/banner.component";
import { Banner } from 'src/app/interfaces/banner.interface';
import { Category } from 'src/app/interfaces/category.interface';
import { Product } from 'src/app/interfaces/product.interface';
import { BannerService } from 'src/app/services/banner/banner.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonRow, IonCol, IonText, IonButton, IonIcon, IonLabel, IonItem, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonSearchbar, ListHeadingComponent, BannerComponent]
})
export class HomePage implements OnInit {

  banners = computed<Banner[]>(() => this.bannerService.getBanners());
  categories = computed<Category[]>(() => this.categoryService.getCategories());
  products = computed<Product[]>(() => this.productService.getProducts());

  private bannerService = inject(BannerService);
  private categoryService = inject(CategoryService);
  private productService = inject(ProductService);

  constructor() {
    addIcons({
      location, chevronDownOutline, cart, notifications, options
    }); 
  }

  ngOnInit() {
  }

}
