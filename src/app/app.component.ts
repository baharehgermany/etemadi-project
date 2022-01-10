import { Component, OnInit } from '@angular/core';//1. functionen importieren

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// Variable deffiniert
export class AppComponent implements OnInit {// dem component OnInit inplementieren
images = ['devices.jpg', 'monitor.jpg', 'workplace.jpg'];
currentImage = 0;
showImage = true;

  // wird als erstes augerufen
  ngOnInit(){
  this.updateImage();
  }

//images nach alle 8 sec 0, 1, 2, 0, 1, 2 usw.(Modulu ist der Restoperator)
  updateImage() {
    setInterval(() => {
      this.currentImage++;//immer einen hinzufügen
      this.currentImage = this.currentImage % this.images.length;//länge deffinieren mit %
      this.showImage = false;

      //Interval 100 millisec gestoppt (true für glatte Übergänge)
      setTimeout(() =>{
        this.showImage = true;

      }, 10);
    }, 8000);

  
  }

}
