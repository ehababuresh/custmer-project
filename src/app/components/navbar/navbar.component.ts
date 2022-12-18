import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  dropdown:boolean=false;
 



testList = [{ value: '1', name: this.logout }, { value: '2', name: 'user' }];


  email! : string
  togglemenu: any;
 

  constructor(private us: UsersService,private router:Router) { }

  ngOnInit(): void {

    this.email= sessionStorage.getItem("email") as  string;
  }
 


  logout() {
    this.us
    .logout()
    .then(() => {
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('isLoggedIn');
      this.router.navigateByUrl('login');
    })
    .catch((err: any) => console.log(err));
  }



}


