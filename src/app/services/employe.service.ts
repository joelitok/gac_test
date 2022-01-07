import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employe } from '../model/employe.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http:HttpClient) {}




//get All Employes  
getAllEmployes():Observable<Employe[]>{
let host = environment.host;
return this.http.get<Employe[]>(host+"/employes");
}


//delete Employes
deleteEmploye(employe:Employe):Observable<void>{
  let host=environment.host;
  return this.http.delete<void>(host+"/employes/"+employe.id);
}


//save Employes
registerEmploye(employe:Employe):Observable<Employe>{
  let host=environment.host;
  return this.http.post<Employe>(host+"/employes/",employe);
}


//search employes
searchEmployes(keyword:string):Observable<Employe[]>{
  let host = environment.host;
  return this.http.get<Employe[]>(host+"/employes?name_like="+keyword);
}


//get One Employe
getEmploye(id:number):Observable<Employe>{
  let host =environment.host;
  return this.http.get<Employe>(host+"/employes/"+id);
}


//update employe
updateEmploye(employe:Employe):Observable<Employe>{
  let host =environment.host;
  return this.http.put<Employe>(host+"/employes/"+employe.id, employe);
}


//select employe
selectEmploye(employe:Employe):Observable<Employe>{
  let host=environment.host;
  employe.selected=!employe.selected;
  return this.http.put<Employe>(host+"/employes/"+employe.id,employe);
}


//get selected employe
getSelectedEmployes():Observable<Employe[]>{
  let host = environment.host;
  return this.http.get<Employe[]>(host+"/employes?selected=true");
}

//get available employe
getAvailableEmployes():Observable<Employe[]>{
  let host =environment.host;
  return this.http.get<Employe[]>(host+"/employes?available=true");
}




















}
