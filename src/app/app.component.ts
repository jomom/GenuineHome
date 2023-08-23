import { Component } from '@angular/core';
import { HousingLocation } from './housing-location';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fairhouse';

  housingLocationList: HousingLocation[] = [
    {
      name: "Upendo Fresh Start Housing",
      city: "Nairobi",
      state: "NBO",
      photo: "../assets/housing-1.jpg",
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: "A113 Transitional Housing",
      city: "Mombasa",
      state: "MBA",
      photo: "../assets/housing-2.jpg",
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      name: "Warm Beds Housing Support",
      city: "Lamu",
      state: "AMU",
      photo: "../assets/housing-3.jpg",
      availableUnits: 1,
      wifi: false,
      laundry: false,
    }
  ]

  selectedLocation: HousingLocation | undefined;

  updateSelectedLocation(location: HousingLocation){
    this.selectedLocation = location;
  }
}
