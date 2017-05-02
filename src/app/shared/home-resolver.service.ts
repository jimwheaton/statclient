import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ApiService } from "./api.service";

@Injectable()
export class HomeResolver implements Resolve<any>{
    constructor(private api:ApiService) {}
    resolve() {
        return this.api.getLookups().map(lookups => lookups);
    }
}