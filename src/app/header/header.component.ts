import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

 @Input()
 title: string;
 num = 1;
 titleLink = 'http://blog.miniasp.com/';
 //editTxt: string;
 IsEdit = true;
  constructor() {}

  ngOnInit() {
    //this.editTxt = this.title;
  }
  PushOne() {
   this.num++;
  }
   EditInput(event: KeyboardEvent, input: HTMLInputElement ){
     if(event.keyCode === 13) {
       this.title = input.value;
       this.IsEdit = true;
     }
   }

   EnterEdit(event: MouseEvent){
      this.IsEdit = false;
      event.preventDefault();
   }
}
