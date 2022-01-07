import { Component, OnInit } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Employe } from 'src/app/model/employe.model';
import { EmployeService } from 'src/app/services/employe.service';
import { AppDataState, DataStateEnum } from 'src/app/state/employe.state';
import { catchError, map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  panelNum:any=1;
  employes$:Observable<AppDataState<Employe[]>> |null=null
  readonly DataStateEnum= DataStateEnum;
  constructor( private employeService:EmployeService) { }



    ngOnInit(): void {
      
    this.getAllEmployes();
                      }


  displayStyle = "none";
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
}




// start direction button
next() { 
  if (this.panelNum < 4) this.panelNum++; else this.panelNum = 1;
 }
 

 prev(){
  if (this.panelNum > 1) this.panelNum--; else this.panelNum = 4;
 }
// end direction button


//get all employees
 getAllEmployes(){
  this.employes$=this.employeService.getAllEmployes().pipe(
      map(data=>({dataState:DataStateEnum.LOADED, data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
  )  
}


//search Employees
onSearch(dataForm:any){
  this.employes$=this.employeService.searchEmployes(dataForm.keyword).pipe(
    map(data=>({dataState:DataStateEnum.LOADED, data:data})),
    startWith({dataState:DataStateEnum.LOADING}),
    catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
)

}




//delete employer
onDelete(employe:Employe){
  var c =confirm("Etes vous sur de vouloir supprimer?")
  if(c==true)
  this.employeService.deleteEmploye(employe).subscribe(
    data=>{
      this.getAllEmployes();
    }
  )

}








 getNewEmploye(){

 }


















}

