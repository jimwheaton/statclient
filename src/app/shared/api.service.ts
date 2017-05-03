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

    let queryString:string =`?site=${site}&market=${market}&device=${device}&start=${start}&end=${end}&weighted=${weighted}&keyword=${keyword}`;
    let asCsv = csv ? '.csv' : '';
    
    return this.http.get(`api/rankings${asCsv}${queryString}`).map((response) => {
      return <IRanking[]>response.json();
    }).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.status);
  }
}
