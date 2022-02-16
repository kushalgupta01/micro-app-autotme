import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'autotme-smart-msg',
  templateUrl: './smart-msg.component.html',
  styleUrls: ['./smart-msg.component.scss']
})
export class SmartMsgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  smartMsg={
    msgType:'static',
    apiEndPoint:'',
    text:'',
    imageUrl:'',
    landingUrl:'',
    date:'',
    time:null
  }

  submitData(event:any){
console.log(this.smartMsg)
  }

}
