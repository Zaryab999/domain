import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from'@angular/common/http';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor( private http:HttpClient) { }
  add(Domain:any,SmtpAddress:any,Email:any,Password:any){
    return this.http.post<any>('api/Domains/AddDomain',{Domain,SmtpAddress,Email,Password}).pipe(
      map((data)=>{
        return data;
    })
    )
  }
  update(Domain:any,SmtpAddress:any,Email:any,Password:any,Id:any){
    
    return this.http.post<any>(`api/Domains/UpdateDomain`,{Domain,SmtpAddress,Email,Password,Id}).pipe(
      map((data)=>{
        return data;
    })
    )
  }
  getdomains(){
    return this.http.get('api/Domains/GetDomains').pipe(
      map((data:any)=>{
      return data;
        
      }
      )
    )
  }
  delete(Id:any){
    return this.http.post(`api/Domains/DeleteDomain`,Id).pipe(
      map((data)=>{
        return data;
    })
    )
  }

}
