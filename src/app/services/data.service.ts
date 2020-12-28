import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userData: Object;

  constructor() { }

  setUserData(data){
    this.userData = data;
  }

  getUserData(){
    return this.userData;
  }
}
