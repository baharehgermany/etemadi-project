import { Component, OnInit } from '@angular/core';//1. functionen importieren

//app-root html.index
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// Variable deffiniert
export class AppComponent implements OnInit {// dem component OnInit inplementieren
 ngOnInit(): void {
    
 }
}
