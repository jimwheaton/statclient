import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpService } from './http.service';
import { IRanking, ISite, IDevice, IMarket, IKeyword } from './model';
declare var require: any
var download = require("downloadjs");

@Injectable()
export class ApiService {

  private filename: string = "rankings";

  constructor(private http: HttpService) { }

  getLookups(): Observable<any> {
    return this.http.get("api/stat/lookups").map((response) => {
      return response.json();
    });
  }

  getRankings(site: string,
    market: string,
    device: string,
    start: string,
    end: string,
    keyword: string): Observable<IRanking[]> {

    let queryString: string = `?site=${site}&market=${market}&device=${device}&start=${start}&end=${end}&weighted=false&keyword=${keyword}`;
    let queryStringWeighted: string = `?site=${site}&market=${market}&device=${device}&start=${start}&end=${end}&weighted=true&keyword=${keyword}`;

    return Observable.forkJoin(
      this.http.get(`api/rankings${queryString}`)
        .map((response) => <IRanking[]>response.json())
        .catch(this.handleError),
      this.http.get(`api/rankings${queryStringWeighted}`)
        .map((response) => <IRanking[]>response.json())
        .catch(this.handleError)
    );
  }

  downloadRankings(site: string,
    market: string,
    device: string,
    start: string,
    end: string,
    keyword: string,
    weighted: boolean): Observable<any> {

    let queryString: string = `?site=${site}&market=${market}&device=${device}&start=${start}&end=${end}&weighted=${weighted}&keyword=${keyword}`;
    let filename = weighted ? `${this.filename}.weighted.csv` : `${this.filename}.csv`;

    return this.http.get(`api/rankings.csv${queryString}`)
      .map((response) => download(response.text(), filename, "text/csv"))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.status);
  }
}
