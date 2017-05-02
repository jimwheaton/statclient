import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
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

}
