import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRow,
  IonCol,
  IonToggle,
  IonIcon,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { radioButtonOnOutline, radioButtonOffOutline } from 'ionicons/icons';

import { CapacitorFlash } from '@capgo/capacitor-flash';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRow,
    IonCol,
    IonToggle,
    IonIcon,
    CommonModule,
  ],
})
export class HomePage {
  isActive: boolean = false;

  constructor() {
    addIcons({ radioButtonOnOutline, radioButtonOffOutline });
  }

  toggleLuz() {
    if (this.isActive) {
      CapacitorFlash.switchOff();
      this.isActive = false;
    } else {
      CapacitorFlash.switchOn({ intensity: 1 });
      this.isActive = true;
    }
  }
}
