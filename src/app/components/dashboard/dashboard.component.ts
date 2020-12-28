import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: Object;

  constructor(private dataService: DataService, private firebaseService:  FirebaseService) {}

  ngOnInit(): void {
    this.user = this.dataService.getUserData();
  }

  signOut(){
    this.firebaseService.signOut();
  }


}
