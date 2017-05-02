import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpService } from './http.service';
import { IRankingResult, ISite, IDevice, IMarket, IKeyword } from './model';

@Injectable()
export class ApiService {

  constructor(private http: HttpService) { }

  getLookups(): Observable<any> {
    return this.http.get("api/stat/lookups").map((response) => {
      return response.json();
    });
  }

  getRankings(keyword: string): Observable<IRankingResult[]> {
    return this.http.get("http://localhost:61388/api/rankings").map((response) => {
      return <IRankingResult[]>response.json();
    }).catch(this.handleError);
  }

  getWeightedRankings() {

  }

  private handleError(error: Response) {
    return Observable.throw(error.status);
  }
}
