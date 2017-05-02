import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'STAT';
  lookups:any;
 
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.lookups = this.route.snapshot.data['lookups'];
  }
}
