import { Component, Input } from '@angular/core';
@Component({
selector: 'app-forumpage',
templateUrl: './forumpage.component.html',
styleUrls: ['./forumpage.component.css']
})
export class ForumpageComponent {
@Input() q:any;
}