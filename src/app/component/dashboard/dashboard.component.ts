import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'devotify-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchUserType: searchUser[];
  options: Object;

  constructor() {
    this.searchUserType = [
      {id: 0, type: 'New User'},
      {id: 1, type: 'Old User'}
    ];

    this.options = {
      credits: { enabled: false },
      title : { text : '' },
      legend: { enabled: false },
      xAxis: {
        categories: [
          '1 April 2017',
          '2 April 2017',
          '3 April 2017',
          '4 April 2017',
          '5 April 2017',
          '6 April 2017',
          '7 April 2017',
          '8 April 2017',
          '9 April 2017',
          '10 April 2017'
        ]
      },
      yAxis: { title: { enabled: false } },
      series: [{
          name: 'New Users',
          data: [29, 71, 106, 129, 29, 71, 106, 129, 29, 71]
      }]
    };
  }

  ngOnInit() {
  }

}

interface searchUser {
  id: number;
  type: string;
}
