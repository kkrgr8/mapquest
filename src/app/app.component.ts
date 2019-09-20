import { Component, OnInit } from '@angular/core';
declare var L : any;
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit {

private map: any;
constructor() { }

ngOnInit() { 

L.mapquest.key = 'oGAhco9wXT4GLGiAscUaCSJqrHBkSWvp';

this.map = L.mapquest.map('map', {

center: [10.786251, 79.141293],

layers: L.mapquest.tileLayer('map'),

zoom: 5

});

L.marker([10.786251, 79.141293], {
          icon: L.mapquest.icons.marker(),
          draggable: false
        }).bindPopup('kkrgr8').addTo(this.map);



this.map.addControl(L.mapquest.control());

  

}

 
}

