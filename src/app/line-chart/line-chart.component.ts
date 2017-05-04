import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnChanges {

  @Input() data:any;
  @ViewChild(BaseChartDirective) _chart;

  public lineChartOptions:any = {
    responsive: true
  };
  
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  ngOnChanges() {
    setTimeout(() => {
      this._chart.refresh();
    }, 10);
  }

}
