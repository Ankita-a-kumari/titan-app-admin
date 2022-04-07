import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService,LoginData} from 'src/app/auth.service';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('logIn', { static: false })
  @ViewChildren(ElementRef) modalRef:QueryList<ElementRef>
  error: string = '';
  email: string = '';
  password: string = '';
  token: any;
  constructor(private router: Router , 
    private commonService:CommonService, private auth:AuthService) {}

  ngOnInit(): void {}
  loading = false;
  login: string = '';
  login1: string = '';
  loginCred:LoginData={email:"",password:""}
  
  loginData(form: NgForm) {
    if (form.valid) {
      this.email = form.value.email;
      this.password = form.value.password;
this.loginCred.email=this.email;
this.loginCred.password=this.password
      var storageemail = localStorage.getItem('email');

      var storagepassword = localStorage.getItem('password');
      this.loading = true;
      this.auth
      .login(this.loginCred)
      .then((response) => {
        console.log(response)
        if(response.user.email=="useradmin@gmail.com")
        {
            this.commonService.isAdmin=true;
            this.commonService.usersData=response;
        }
        else this.commonService.isAdmin=false;
        this.loading = false;
        this.router.navigate(['/home'])   
    }
      ).catch((error)=>{
        this.loading = false;
        if(error.message.includes('user-not-found')) this.error="User not Found";
        if(error.message.includes('wrong-password')) this.error="Inavlid Password";
      })

      this.token = localStorage.setItem('token', this.email);
 
    }
  }
}
