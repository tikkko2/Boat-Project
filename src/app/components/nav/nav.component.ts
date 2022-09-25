import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  logo = "../assets/logo.png";
  constructor(private authService: AuthService) {}

  

  ngOnInit(): void {
  }
isAuthenticated(){
    return this.authService.isAuthenticated;
  }

  logout(){
    this.authService.logout();
  }
}
