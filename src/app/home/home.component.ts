import { Component, OnInit } from '@angular/core';
import { IAppState, StatActions } from '../store';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

const SITE_FILTER: string = 'SITE';
const DEVICE_FILTER: string = 'DEVICE';
const MARKET_FILTER: string = 'MARKET';
const START_DATE_FILTER: string = 'START_DATE';
const END_DATE_FILTER: string = 'END_DATE';
const KEYWORD_FILTER: string = 'KEYWORD';
const WEIGHTED_FILTER: string = 'WEIGHTED';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'STAT';
  lookups: any;

  @select('sites') sites$: Observable<string[]>;
  @select('markets') markets$: Observable<string[]>;
  @select('devices') devices$: Observable<string[]>;
  @select('keywords') keywords$: Observable<string[]>;
  @select('dates') dates$: Observable<string[]>;

  constructor(private actions: StatActions) {}

  ngOnInit() {}

  filterChanged(event) {
    let action;
    switch (event.filter) {
      case SITE_FILTER:
        return this.actions.changeSite(event.value);
      case DEVICE_FILTER:
        return this.actions.changeDevice(event.value);
      case MARKET_FILTER:
        return this.actions.changeMarket(event.value);
      case KEYWORD_FILTER:
        return this.actions.changeKeyword(event.value);
      case START_DATE_FILTER:
        return this.actions.changeStartDate(event.value);
      case END_DATE_FILTER:
        return this.actions.changeEndDate(event.value);
      case WEIGHTED_FILTER:
        return this.actions.changeWeighted(event.value);
    }
  }

  onRankings() {
    this.actions.getKeywordRanks();
  }

  onDownload() {
    this.actions.download();
  }

}

