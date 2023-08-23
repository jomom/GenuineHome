import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  @Input() locationList: HousingLocation[] = []
  
  results: HousingLocation[] = []; // Declare the results property and initialize it as an empty array

  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();
  constructor() { }

  ngOnInit(): void {
  }

  searchHousingLocations(searchText : string){
    if (!searchText) {
      this.results = []; // Clear results if searchText is empty
      return;
    }

    this.results = this.locationList.filter(
      (location: HousingLocation ) => location.city
        .toLowerCase()
        .includes(searchText.toLowerCase()
        ));
  }

  
  selectHousingLocation(location: HousingLocation) { 
    this.locationSelectedEvent.emit(location);
  }

}
