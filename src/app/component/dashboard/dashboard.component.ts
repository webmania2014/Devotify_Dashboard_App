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
  }

  ngOnInit() {
  }

}

interface searchUser {
  id: number;
  type: string;
}
