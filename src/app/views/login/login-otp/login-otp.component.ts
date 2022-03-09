import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'autotme-login-otp',
  templateUrl: './login-otp.component.html',
  styleUrls: ['./login-otp.component.scss']
})
export class LoginOtpComponent implements OnInit {


  constructor(private router: Router, private loginService:LoginService) { }
  telegramChannelName: string | undefined;
  isOtpGenerationSuccesful:boolean=false;
  ngOnInit(): void {

  }

  generateOTP(){
    if(this.telegramChannelName){
      this.loginService.generateOTP(this.telegramChannelName).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/verify-otp']);
      })
    }
    


  }
}
