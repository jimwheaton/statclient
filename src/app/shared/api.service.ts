import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpService } from './http.service';
import { IRanking, ISite, IDevice, IMarket, IKeyword } from './model';

@Injectable()
export class ApiService {

  constructor(private http: HttpService) { }

  getLookups(): Observable<any> {
    return this.http.get("api/stat/lookups").map((response) => {
      return response.json();
    });
  }

  getRankings(site:string, 
              market:string, 
              device:string, 
              start:string, 
              end:string,
               keyword: string,
               weighted:boolean,
               csv:boolean): Observable<IRanking[]> {

    let params: URLSearchParams = new URLSearchParams();
    params.set('site', site);
    params.set('market', market);
    params.set('device', device);
    params.set('start', start);
    params.set('end', end);
    params.set('keyword', keyword);
    params.set('weighted', weighted.toString());

    let asCsv = csv ? '.csv' : '';
    
    return this.http.get(`api/rankings${asCsv}`, { search: params }).map((response) => {
      return <IRanking[]>response.json();
    }).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.status);
  }
}
