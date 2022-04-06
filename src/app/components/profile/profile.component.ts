import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router,private authService:AuthService) {}
  fname: any = localStorage.getItem('fname');
  lname: any = localStorage.getItem('lname');

  ngOnInit(): void {}
  logout() {
    this.authService
    .logout()
    .then(() => {
      localStorage.removeItem('token')
      this.router.navigate(['/login'])
    })
    .catch((e) => console.log(e.message));
}
  
}
