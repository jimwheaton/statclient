import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';

export const CHANGE_KEYWORD = 'CHANGE_KEYWORD';
export const CHANGE_SITE = 'CHANGE_SITE';
export const CHANGE_DEVICE = 'CHANGE_DEVICE';
export const CHANGE_MARKET = 'CHANGE_MARKET';
export const CHANGE_START_DATE = 'CHANGE_START_DATE';
export const CHANGE_END_DATE = 'CHANGE_END_DATE';
export const CHANGE_WEIGHTED = 'CHANGE_WEIGHTED';
export const GET_RANKINGS_SUCCESS = 'GET_RANKINGS_SUCCESS';
export const GET_LOOKUPS_SUCCESS = 'GET_LOOKUPS_SUCCESS';

@Injectable()
export class StatActions {
    constructor(private ngRedux: NgRedux<IAppState>,
        private api: ApiService) { }

    changeKeyword(keyword: string) {
        this.ngRedux.dispatch({
            type: CHANGE_KEYWORD,
            keyword
        });
    }

    changeSite(site: string) {
        this.ngRedux.dispatch({
            type: CHANGE_SITE,
            site
        });
    }

    changeMarket(market: string) {
        this.ngRedux.dispatch({
            type: CHANGE_MARKET,
            market
        });
    }

    changeDevice(device: string) {
        this.ngRedux.dispatch({
            type: CHANGE_DEVICE,
            device
        });
    }

    changeEndDate(endDate: string) {
        this.ngRedux.dispatch({
            type: CHANGE_END_DATE,
            endDate
        });
    }

    changeStartDate(startDate: string) {
        this.ngRedux.dispatch({
            type: CHANGE_START_DATE,
            startDate
        });
    }

    changeWeighted(weighted: boolean) {
        this.ngRedux.dispatch({
            type: CHANGE_WEIGHTED,
            weighted
        });
    }

    getLookups() {
        return this.api.getLookups()
            .subscribe(lookups => {
                this.ngRedux.dispatch({
                    type: GET_LOOKUPS_SUCCESS,
                    lookups
                });
            });
    }

    getKeywordRanks() {
        const s = this.ngRedux.getState();

        return this.api.getRankings(
            s.site,
            s.market,
            s.device,
            s.startDate,
            s.endDate,
            s.keyword,
            s.weighted)
            .subscribe(rankings => {
                this.ngRedux.dispatch({
                    type: GET_RANKINGS_SUCCESS,
                    rankings
                });
            });
    }

    download() {
        const s = this.ngRedux.getState();

        return this.api.downloadRankings(
            s.site,
            s.market,
            s.device,
            s.startDate,
            s.endDate,
            s.keyword,
            s.weighted).subscribe((f) => f);
    }
}