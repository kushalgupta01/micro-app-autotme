import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'autotme-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
  }

  loginForm={
    username:'',
    password:''
  }

  invalidCred:boolean=false;

  checkLoginSubmit(event:any){
    if(this.loginForm.username === 'admin' && this.loginForm.password === 'admin'){
      this.invalidCred = false;
     // this.router.navigate(['home'], { relativeTo: this.route });
     this.router.navigate(['home'])
    }else{
      this.invalidCred = true;
    }
  }

}
