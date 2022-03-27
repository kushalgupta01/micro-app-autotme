import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

interface Repeat {
  name: string,
  code: string
}


@Component({
  selector: 'autotme-smart-msg',
  templateUrl: './smart-msg.component.html',
  styleUrls: ['./smart-msg.component.scss']
})
export class SmartMsgComponent implements OnInit {

   constructor(private loginService: LoginService) {
    this.repeatSelection = [
      {name: 'Does not repeat', code: 'does not repeat'},
      {name: 'Daily', code: 'daily'},
      {name: 'Weekly', code: 'weekly'},
      {name: 'Monday through Friday', code: 'mtf'},
      {name: 'Saturdays and Sundays', code: 'sas'},
      {name: 'Mon, Wed and Fri', code: 'mwf'}
  ];
    }

    repeatSelection: Repeat[];

    selectedCity: Repeat={ name: '',
      code: ''};

    
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