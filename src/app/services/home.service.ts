import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'

})

export class HomeService {
    httpOp: any;
constructor(private http:HttpClient) { }
getServices():Observable<any> {
return this.http.get("http://localhost:4500/services");
}
getDetails(id:number):Observable<any>{
return this.http.get("http://localhost:4500/details/"+id)
}
getServiceById(id:number):Observable<any>{
return this.http.get("http://localhost:4500/services/"+id)
}
postProducts(obj:any):Observable<any>{
this.httpOp= new HttpHeaders({    
'Content-Type':'application.json',   
})  
return this.http.post("http://localhost:4500/services",obj,this.httpOp);   
}
httpOptions(arg0: string, obj: any, httpOptions: any): Observable<any> {
throw new Error('Method not implemented.');
}
}
