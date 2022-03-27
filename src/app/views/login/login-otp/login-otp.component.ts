import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IS_USER_REGISTERED } from 'src/app/autotme-urls';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'autotme-login-otp',
  templateUrl: './login-otp.component.html',
  styleUrls: ['./login-otp.component.scss']
})
export class LoginOtpComponent implements OnInit {

  isUserRegistered:boolean=true;
  errormsg: string = '';
  constructor(private router: Router, private loginService: LoginService) { }
  telegramChannelName: string | null = null;
  isOtpGenerationSuccesful: boolean = false;
  ngOnInit(): void {

  }

  async generateOTP() {

    if(this.telegramChannelName?.includes('https')){
      this.telegramChannelName =  this.telegramChannelName;
    }else if(this.telegramChannelName?.includes('t.me')){
      this.telegramChannelName = `https://${this.telegramChannelName}`;
    }else{
      this.telegramChannelName = `https://t.me/${this.telegramChannelName}`;
    }

    this.loginService.isUserRegistered(this.telegramChannelName).subscribe((data:any) => {
      if(data.flow === "login"){
        this.generateOTPForUser(this.telegramChannelName);
        this.isUserRegistered=true;
      }else{
        this.isUserRegistered=false;
      }
    },err=>{
      console.log(err)
      this.errormsg = "Maybe server is down. Please retry again in some time.";
    })




  }
  generateOTPForUser(telegramChannelName: string | null) {
    this.loginService.generateOTP(this.telegramChannelName).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/verify-otp']);
      localStorage.setItem('otp', data.message.split(',')[1])
      if (this.telegramChannelName) {
        localStorage.setItem('channelName', this.telegramChannelName);
      }


    }, error => {
      console.log(error);
      this.errormsg = error.message;

    })
  }

  signup(){
    console.log("signup implementation is pending")
  }
  
}
