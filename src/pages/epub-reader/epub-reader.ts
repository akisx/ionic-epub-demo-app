import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var ePub: any;

@Component({
  selector: 'page-epub-reader',
  templateUrl: 'epub-reader.html'
})
export class EpubReaderPage {
  @ViewChild('container') container: ElementRef;
  book: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.book = ePub('assets/The-Problems-of-Philosophy-LewisTheme.epub');
    this.book.renderTo(this.container.nativeElement);
  }

  showNextPage() {
    this.book.nextPage();
  }

  showPrevPage() {
    this.book.prevPage();
  }

}
