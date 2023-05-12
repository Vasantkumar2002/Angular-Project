import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-adminforumpage',
  templateUrl: './adminforumpage.component.html',
  styleUrls: ['./adminforumpage.component.css']
})
export class AdminforumpageComponent{
  @Input() q:any;

}
