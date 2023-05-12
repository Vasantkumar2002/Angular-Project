import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-adminforum',
  templateUrl: './adminforum.component.html',
  styleUrls: ['./adminforum.component.css']
})
export class AdminforumComponent{
forumlist:any;
query:any;  
id:any;
data:any;
constructor(private fs:ForumService){
this.fs.getForum().subscribe(
{
  
   next: (data:any)=> this.forumlist =data,
  
   error: ()=> this.forumlist=[]
  
   }
  
   )
  
   }
  
   AddQuestion(){
  
   var q:any={
  
   id:this.forumlist.length+1,
  
   question:this.query,
  
   responses:[]
  
   }
  
   this.fs.postquery(q).subscribe(
  
   {
  
   next:(f:any)=>{
  
   alert("question posted");
  
   location.reload();
  
   },
  
   error:(error)=>alert("not posted")
  
   }
  
   )
  
   }
  
  }