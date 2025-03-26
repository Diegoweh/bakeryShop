import { Component, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonCard, IonImg, IonIcon, IonThumbnail, IonItem, IonLabel, IonText } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { star, heart } from 'ionicons/icons';
import { Strings } from 'src/app/enums/string.enum';
import { Product } from 'src/app/interfaces/product.interface';
import { VegNonvegIndicatorComponent } from 'src/app/widgets/veg-nonveg-indicator/veg-nonveg-indicator.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  imports: [IonText, IonLabel, IonItem, IonIcon, IonImg, IonCard, IonThumbnail, VegNonvegIndicatorComponent, RouterLink]
})
export class ProductComponent  implements OnInit {

  item = input<Product>();
  currency = Strings.currency;
  
  constructor() {
    addIcons({
      star,
      heart,
    });
  }

  ngOnInit() {}

}
