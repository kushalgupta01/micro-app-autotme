import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'autotme-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.logout();
  }

}
