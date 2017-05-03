import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ApiService } from "./api.service";
import { StatActions} from "../store";

@Injectable()
export class HomeResolver implements Resolve<any>{
    constructor(private actions:StatActions) {}
    resolve() {
        return this.actions.getLookups();
    }
}