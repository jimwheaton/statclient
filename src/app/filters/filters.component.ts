import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() public keywords:Observable<string[]>;
  @Input() sites:string[];
  @Input() devices:string[];
  @Input() markets:string[];
  @Input() dates:string[];

  @Output() change:EventEmitter<any> = new EventEmitter();
  @Output() onRankings:EventEmitter<any> = new EventEmitter();
  @Output() onDownload:EventEmitter<any> = new EventEmitter();

  keywordsForAutoComplete:string[];
  keywordCtrl: FormControl;
  filteredKeywords: any;
  
  constructor() {
    this.keywordCtrl = new FormControl();
    
    this.filteredKeywords = this.keywordCtrl.valueChanges
        .startWith(null)
        .do((name) => this.filterChanged('KEYWORD', name))
        .map(name => this.filterKeywords(name));
  }

  ngOnInit() {
    this.keywords.subscribe(keywords => {
      this.keywordsForAutoComplete = keywords;
      this.keywordCtrl.setValue(null);
    });
  }

  filterKeywords(val: string) {
    return val ? this.keywordsForAutoComplete.filter(s => new RegExp(`^${val}`, 'gi').test(s))
               : this.keywordsForAutoComplete;
  }

  filterChanged(filter, value) {
    this.change.emit({filter, value});    
  }

  getRankings() {
    this.onRankings.emit();
  }

  download() {
    this.onDownload.emit();
  }

  disableRankingsActions() {
    return !this.keywordCtrl.value;
  }

}
