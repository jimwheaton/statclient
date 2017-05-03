import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['./action-panel.component.css']
})
export class ActionPanelComponent implements OnInit {

  @Output() onRankings:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getRankings(weighted){
    this.onRankings.emit(weighted);
  }

}
