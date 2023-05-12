import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
@Component({
selector: 'app-add',
templateUrl: './add.component.html',
styleUrls: ['./add.component.css']
})
export class AddComponent {
id:any;
name:any;
type:any;
image:any;
protein:any;
fats:any;
Calories:any;
carbohydrates:any;
isNew?:boolean;
errors:string[]=[];
constructor(private hs:HomeService) { }
submit(){
this.errors = []
if(this.name==undefined || this.name.length<3)
this.errors.push("Name should be greater than 3 characters")
if(this.type==undefined )
this.errors.push("type is required")
if(this.image==undefined )
this.errors.push("image is required")
if(this.protein==undefined )
this.errors.push("protein is required")
if(this.fats==undefined )
this.errors.push("fats is required")
if(this.carbohydrates==undefined )
this.errors.push("carbohydrates is required")
if(this.Calories==undefined )
this.errors.push("calories is required")
if(this.errors.length==0){
let obj={
id:Math.round(Math.random()*100000),
name:this.name,
type:this.type,
image:this.image,
protein:this.protein,
fats:this.fats,
carbohydrates:this.carbohydrates,
Calories:this.Calories,
isNew:true

}
this.hs.postProducts(obj).subscribe({
next: ()=>{
alert("Successfully Added .Thank you..")
this.name="",
this.type="",
this.image="",
this.protein="",
this.fats="",
this.carbohydrates="",
this.Calories=""
},
error: ()=>alert("There is a problem in adding this!")
}
)
}
}
}