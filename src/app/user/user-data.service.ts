import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  userData;

  constructor() { 
    console.log(this.userData)
  }

  //  USER INFORMATION DATA 

  getData(data){
    this.userData = data
    // debugger
    console.log(this.userData);
  }

  updateData(){
    return this.userData
  }


}
