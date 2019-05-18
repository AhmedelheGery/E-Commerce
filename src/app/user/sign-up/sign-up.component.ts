import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  // providers : [UserDataService]
})
export class SignUpComponent implements OnInit {

  signupForm : FormGroup 

  
  constructor(
    private userData : UserDataService,
    private router : Router,
    )
     { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username' : new FormControl(null , [Validators.required]),
      'email' : new FormControl(null , [Validators.required , Validators.email]),
      'password' : new FormControl(null , [Validators.required , Validators.minLength(6) , Validators.maxLength(12)]),
      'phoneNumber' : new FormControl(null , [Validators.required])
    })

  }

  onSubmit(){

  }

  saveData(){
    this.userData.getData(this.signupForm.value);   
    this.router.navigate(['/home']);
  }





}
