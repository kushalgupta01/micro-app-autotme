import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'autotme-my-links-page',
  templateUrl: './my-links-page.component.html',
  styleUrls: ['./my-links-page.component.scss']
})
export class MyLinksPageComponent implements OnInit {

  constructor(private loginService: LoginService,private router: Router) { }
  visibleSidebar1:boolean=false;
  channelName:string | null ='';
  customLink:any={
    buttonName:String,
    link:String

  }
  links:any[]=[];
  ngOnInit(): void {
    this.channelName =   localStorage.getItem('channelName');
    this.customLink={
      buttonName:'',
      link:''
    }
  }
  displayBasic:boolean=false;

  logout() {
    this.loginService.logout();
  }

  home(){
    this.router.navigate(['/home']);
  }
  addcustomLink(event:any){
    console.log(event);
    this.customLink={
      buttonName:'',
      link:''
    }
    this.links.push({...event})
  }

}
