import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'STAT';
  keywords: string[];
  sites: string[];
  dates: string[];
  markets: string[];
  devices: string[];
  keywordCtrl: FormControl;
  filteredKeywords: any;


  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.keywordCtrl = new FormControl();
    this.filteredKeywords = this.keywordCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterKeywords(name));
  }

  ngOnInit() {
    const lookups = this.route.snapshot.data['lookups'];
    this.keywords = lookups.keywords;
    this.sites = lookups.sites;
    this.dates = lookups.dates;
    this.markets = lookups.markets;
    this.devices = lookups.devices;
  }

  filterKeywords(val: string) {
    return val ? this.keywords.filter(s => new RegExp(`^${val}`, 'gi').test(s))
               : this.keywords;
  }

}
