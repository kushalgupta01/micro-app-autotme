import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'autotme-smart-msg',
  templateUrl: './smart-msg.component.html',
  styleUrls: ['./smart-msg.component.scss']
})
export class SmartMsgComponent implements OnInit {

   constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  visibleSidebar1:boolean=false;
  displayBasic:boolean=false;
  logout() {
    this.loginService.logout();
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

  
  showBasicDialog() {
    this.displayBasic = true;
}


}