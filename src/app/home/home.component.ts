import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { store, changeSite, changeKeyword, changeDevice, changeMarket, changeStartDate, changeEndDate } from '../store';

const SITE_FILTER:string = 'SITE';
const DEVICE_FILTER:string = 'DEVICE';
const MARKET_FILTER:string = 'MARKET';
const START_DATE_FILTER:string = 'START_DATE';
const END_DATE_FILTER:string = 'END_DATE';
const KEYWORD_FILTER:string = 'KEYWORD';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'STAT';
  lookups:any;
 
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    //this.lookups = this.route.snapshot.data['lookups'];
    this.updateFromState();
    store.subscribe(() => {
      this.updateFromState();
    });
  }

  updateFromState() {
    const allState = store.getState();
    this.lookups = {
      sites: allState.sites,
      markets: allState.markets,
      devices: allState.devices,
      dates: allState.dates,
      keywords: allState.keywords
    }
  }

  filterChanged(event) {
    let action;
    switch(event.filter) {
      case SITE_FILTER:
        return store.dispatch(changeSite(event.value));  
    }
  }
}
