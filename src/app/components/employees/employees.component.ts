import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  panelNum:any=1;
  constructor() { }

  ngOnInit(): void {
  }


  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";

}



next() { 
  if (this.panelNum < 4) this.panelNum++; else this.panelNum = 1;
 }
 
 prev() {
  if (this.panelNum > 1) this.panelNum--; else this.panelNum = 4;
 }


 submit(){

 }
}

