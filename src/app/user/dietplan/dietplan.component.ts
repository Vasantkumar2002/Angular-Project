import { Component, OnInit } from '@angular/core';
import { DietserviceService } from 'src/app/services/diet.service';
@Component({
selector: 'app-dietplan',
templateUrl: './dietplan.component.html',
styleUrls: ['./dietplan.component.css']
})
export class DietplanComponent implements OnInit {
dietlist:any;
constructor(private ds:DietserviceService){
this.ds.getDiet().subscribe(
{
next: (data:any)=> this.dietlist =data,
error: ()=> this.dietlist=[]
}
)
}
ngOnInit(): void {
}
}