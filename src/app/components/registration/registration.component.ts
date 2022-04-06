import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService,LoginData} from 'src/app/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  @ViewChild('signUp', { static: false })
  error: string = '';
  FirstName: string = '';
  LastName: string = '';
  register_phone_number: string = '';
  Email: string = '';
  CreatePassword: string = '';
  signUp: string = '';
  regCred:LoginData={email:"",password:""}
  constructor(private router: Router, private auth:AuthService) {}

  ngOnInit(): void {}
  loading = false;

  registerData(form: NgForm) {
    if (form.valid) {
      this.FirstName = form.value.FirstName;
      this.LastName = form.value.LastName;
      this.register_phone_number = form.value.register_phone_number;
      this.Email = form.value.Email;
      this.CreatePassword = form.value.CreatePassword;

      localStorage.setItem('fname', this.FirstName);
      localStorage.setItem('lname', this.LastName);
      localStorage.setItem('phonenumber', this.register_phone_number);
      localStorage.setItem('email', this.Email);
      localStorage.setItem('password', this.CreatePassword);
      this.regCred.email=this.Email;
      this.regCred.password=this.CreatePassword;
      this.loading = true;
      this.auth
      .register(this.regCred)
      .then(() => {
        this.loading = false;
        this.signUp = 'Sign Up Successful';
        this.router.navigate(['/login'])})
      .catch((e) =>  this.error = e.message)
      
     
      // setTimeout(() => {
      //   this.router.navigate(['/login']);
      // }, 2000);
    } 
  }
}
