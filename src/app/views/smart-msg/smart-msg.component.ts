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
  keys:any=[];
  constructor(private loginService: LoginService) {
    this.repeatSelection = [
      { name: 'Does not repeat', code: 'does not repeat' },
      { name: 'Daily', code: 'daily' },
      { name: 'Weekly', code: 'weekly' },
      { name: 'Monday through Friday', code: 'mtf' },
      { name: 'Saturdays and Sundays', code: 'sas' },
      { name: 'Mon, Wed and Fri', code: 'mwf' }
    ];
  }
  selecteddays: string[] = [];
  repeatSelection: Repeat[];
  categories: any[] = [{name: 'Send One Time', key: 'one'}, {name: 'Send Daily', key: 'daily'}, {name: 'Send Weekly', key: 'weekly'}];
  days: any[] = [{name: 'Every Day', key: 'Every Day'}, {name: 'Every Alternate Day', key: 'Every Alternate Day'}, {name: 'Once in Every 3 Days', key: 'Once in Every 3 Days'}];
  weekdays: any[] = [{name: 'Every Monday', key: 'monday'}, {name: 'Every Tuesday', key: 'tuesday'},{name: 'Every Wednesday', key: 'wednesday'},
  {name: 'Every Thursday', key: 'thursday'},{name: 'Every Friday', key: 'friday'},{name: 'Every Saturday', key: 'saturday'},
  {name: 'Every Sunday', key: 'sunday'}];

  selectedCity: Repeat = {
    name: '',
    code: ''
  };
  selectedCategory: any = null;

  ngOnInit(): void {
  }

  visibleSidebar1: boolean = false;
  displayBasic: boolean = false;
  logout() {
    this.loginService.logout();
  }

  smartMsg = {
    msgType: 'static',
    apiEndPoint: '',
    text: '',
    imageUrl: '',
    landingUrl: '',
    scheduletype: this.categories[0 ],
   
  }
  onChange(data: any) {
    this.loginService.fetchVariables(data).subscribe((data:any) => {
      console.log( Array.isArray(data))

      if(Array.isArray(data)){
        this.extractkeys(data[0]);
      }else{

        if(Array.isArray(data.data)){
          this.extractkeys(data.data[0]);
        }
       
      }
    }, err => {
      this.keys=[]
      console.log(err)
    })
  }
  extractkeys(arg0: any) {
   this.keys= Object.keys(arg0);
  }

  showBasicDialog() {
    this.displayBasic = true;
  }
  onCheckBoxChange(data:any){
    console.log(data)
  }


}