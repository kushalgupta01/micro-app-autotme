import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GENERATE_OTP } from '../autotme-urls';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {
    
   }


  generateOTP(channelname:string){
    return this.http.get(GENERATE_OTP(9619495380,channelname));
  }
}
