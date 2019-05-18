import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {


  userInfo ;
  constructor(private userData : UserDataService) { 
    // console.log(this.userData.userData.username);
    this.userInfo = this.userData.updateData()
    console.log(this.userInfo);
    console.log(this.userInfo.username);
  }
  
  ngOnInit() {
  }

}
