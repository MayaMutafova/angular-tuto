import { Component, OnInit } from '@angular/core';
import {User} from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[];

  constructor() {
    this.userList = [
      {name: 'Erwan', birthday: '14-04-1987'},
      {name: 'Maya', birthday: '08-12-1987'},
      {name: 'Lucas', birthday: '19-02-2009'},
      {name: 'Mert', birthday: '12-03-2015'}
    ];
  }

  ngOnInit() {
  }

}
