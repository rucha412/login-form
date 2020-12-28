import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  constructor(private firebaseService: FirebaseService, private router: Router, private dataService: DataService) { 
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

  loginWithGoogle(){
   this.firebaseService.signInWithGoogle().then(response => {
        this.dataService.setUserData(response);
        this.router.navigate(['/dashboard']);
      }
    );
  }

}
