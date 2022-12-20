import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor() { }
  students(){
    return [
      {name:"Yash", roll_no:"34"},
      {name:"Aryan", roll_no:"01"},
      {name:"Yadnesh", roll_no:"68"}
    ]
  }
}
