import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['devices.jpg', 'monitor.jpg', 'workplace.jpg'];
  headlines = [
    'Bring Programming to the next Level',
    'Born to code',
    'Learn to code'
  ];
  currentImage = 0;
  showImage = true;

  // wird als erstes augerufen
  ngOnInit(): void {
    this.updateImage();
    // this.setCurenntImageIndex(1);

  }

  // setCurenntImageIndex(newIndex: number) {
  //   this.currentImage = newIndex;
  // }

  // getCurrentImageIndex(): number {
  //   return this.currentImage;
  // }

  //images nach alle 8 sec 0, 1, 2, 0, 1, 2 usw.(Modulu ist der Restoperator)
  updateImage(): void {
    setInterval(() => {
      this.currentImage++;//immer einen hinzufügen
      this.currentImage = this.currentImage % this.images.length;//länge deffinieren mit %
      this.showImage = false;

      //Interval 100 millisec gestoppt (true für glatte Übergänge)
      setTimeout(() => {
        this.showImage = true;

      }, 10);
    }, 8000);


  }

}
