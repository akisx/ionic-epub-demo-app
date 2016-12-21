import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { EpubReaderPage } from '../epub-reader/epub-reader';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  openEpubReader() {
    this.navCtrl.push(EpubReaderPage);
  }
}
