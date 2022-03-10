import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'autotme-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {
  errormsg:string='';
  constructor(private router: Router, private loginService:LoginService) { }
  otpValue: string | undefined;
  isOtpGenerationSuccesful:boolean=false;
  ngOnInit(): void {

  }

  verifyOTP(){
    
    if(this.otpValue){
      this.loginService.verifyOtp(+this.otpValue).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/home']);
      },error=>{
        console.log(error);
        this.errormsg=error.message;
        this.router.navigate(['/home']);
      })
    }
  

  }

  enteredOtp(otp:any){
    this.otpValue = otp.value;
 
  }
  regenerateOTP(){
    
      this.loginService.generateOTP('testingautotme').subscribe(data=>{
        console.log(data);
        
      },error=>{
        console.log(error);
        this.errormsg=error.message;
      
      })
    
    
  }
}
