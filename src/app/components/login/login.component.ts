import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  constructor() { 
    this.login = new FormGroup({
     username: new FormControl(null, [Validators.required,Validators.email]),
     password: new FormControl(null,[Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.login.controls.username.value);
    console.log(this.login.controls.password.value);
  }

}
