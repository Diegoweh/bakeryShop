import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonSearchbar, IonLabel, IonIcon, IonButton, IonText, IonCol, IonRow } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cart, chevronDownOutline, notifications, options, location } from 'ionicons/icons';
import { ListHeadingComponent } from 'src/app/components/list-heading/list-heading.component';
import { BannerComponent } from "../../../components/banner/banner.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonRow, IonCol, IonText, IonButton, IonIcon, IonLabel, IonItem, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonSearchbar, ListHeadingComponent, BannerComponent]
})
export class HomePage implements OnInit {

  constructor() {
    addIcons({
      location, chevronDownOutline, cart, notifications, options
    }); 
  }

  ngOnInit() {
  }

}
