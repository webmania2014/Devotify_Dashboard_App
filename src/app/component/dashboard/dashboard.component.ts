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
      yAxis: { title: { enabled: false } },
      series: [{
          name: 'New Users',
          color: '#41b77a',
          marker: {
            fillColor: '#FFFFFF',
            lineWidth: 2,
            lineColor: null
          },
          data: [
            ['1 April 2017', 29],
            ['2 April 2017', 71],
            ['3 April 2017', 106],
            ['4 April 2017', 129],
            ['5 April 2017', 29],
            ['6 April 2017', 71],
            ['7 April 2017', 106],
            ['8 April 2017', 129],
            ['9 April 2017', 29],
            ['10 April 2017', 71]
          ]
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
