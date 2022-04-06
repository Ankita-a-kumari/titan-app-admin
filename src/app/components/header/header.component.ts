import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router,public commonService:CommonService) {}
  localdata: any = localStorage.getItem('fname');
  admin:boolean=false
  ngOnInit(): void {
  }
  navbaropen = false;

  toggleNavbar() {
    this.navbaropen = !this.navbaropen;
  }

  loggedin() {
    return localStorage.getItem('token');
  }

  // logout() {
  //   localStorage.removeItem('token');
  //   this.router.navigate(['/home']);
  // }
  url = './assets/img/user.png';

  onSelectFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();

      reader.readAsDataURL(e.target.files[0]);

      reader.onload = (event: any) => {
        this.url = event.target.result;

        const store = localStorage.setItem('profile', event.target.result);
      };
    }
  }
}
