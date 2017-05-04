import { Component, OnInit } from '@angular/core';
import { IAppState, StatActions } from '../store';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IRanking, searchEngines } from '../shared/model';
import * as _ from 'lodash';
import * as moment from 'moment';

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

  title = 'STAT Search Analytics';
  lookups: any;
  chartData:any;
  weightedChartData:any;

  @select('sites') sites$: Observable<string[]>;
  @select('markets') markets$: Observable<string[]>;
  @select('devices') devices$: Observable<string[]>;
  @select('keywords') keywords$: Observable<string[]>;
  @select('dates') dates$: Observable<string[]>;
  @select('rankings') rankings$: Observable<IRanking[]>
  @select('weightedRankings') weightedRankings$: Observable<IRanking[]>

  constructor(private actions: StatActions) { }

  ngOnInit() {
    var buildChartData = this.getChartData.bind(this);
    this.rankings$.subscribe(rankings => this.chartData = buildChartData(rankings));
    this.weightedRankings$.subscribe(rankings => this.weightedChartData = buildChartData(rankings));
  }

  showCharts() {
    let chartHasData = (chart) => chart && chart.datasets && chart.datasets.length;
    return chartHasData(this.chartData) && chartHasData(this.weightedChartData);
  }

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
    }
  }

  onRankings() {
    this.actions.getKeywordRanks();
  }

  download(weighted:boolean) {
    this.actions.download(weighted);
  }

  private getChartData(rankings: IRanking[]) {
      var bySearchEngine = rankings.reduce((acc, val: IRanking, idx) => {
        _.map(searchEngines, (se) => (acc[se] || (acc[se] = [])).push(val[se]));
        return acc;
      }, {});
      return {
        datasets: _.map(_.keys(bySearchEngine), k => ({ label: k, data: bySearchEngine[k]})),
        labels: _.map(_.uniq(_.map(rankings, r => r.date)), d => moment(d).format('YYYY-MM-DD'))
      };
  }

}

