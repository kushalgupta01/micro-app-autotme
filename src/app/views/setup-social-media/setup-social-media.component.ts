import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'autotme-setup-social-media',
  templateUrl: './setup-social-media.component.html',
  styleUrls: ['./setup-social-media.component.scss']
})
export class SetupSocialMediaComponent implements OnInit {

  visibleSidebar1:boolean=false;
  constructor(private loginService: LoginService,private router: Router) { }


  selectedCategory: any = null;

  categories: any[] = [{name: 'Full Automated Posting (Recommended Option)', key: 'FA'}, {name: 'Semi Automated posting with consent via whatsapp message', key: 'SA'}];


  ngOnInit(): void {
    this.selectedCategory = this.categories[1];
  }

  logout() {
    this.loginService.logout();
  }

  home(){
    this.router.navigate(['/home']);
  }

}
