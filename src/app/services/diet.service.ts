import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'

})

export class DietserviceService {
constructor(private http:HttpClient) { }
getDiet():Observable<any> {
return this.http.get("http://localhost:4500/dietryplan")
}
getDietId(id:any):Observable<any>{
return this.http.get("http://localhost:4500/dietryplan/"+id)
 }
}