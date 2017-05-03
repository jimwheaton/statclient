import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() public keywords:string[];
  @Input() sites:string[];
  @Input() devices:string[];
  @Input() markets:string[];
  @Input() dates:string[];

  @Output() change:EventEmitter<any> = new EventEmitter();

  keywordCtrl: FormControl;
  filteredKeywords: any;

  constructor() {
    this.keywordCtrl = new FormControl();
    this.filteredKeywords = this.keywordCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterKeywords(name));
  }

  ngOnInit() {
  }

  filterKeywords(val: string) {
    return val ? this.keywords.filter(s => new RegExp(`^${val}`, 'gi').test(s))
               : this.keywords;
  }

  filterChanged(filter, value) {
    this.change.emit({filter, value});    
  }

}
