import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  @Input() editData: any;
  error: string = '';
  FirstName: string = '';
  LastName: string = '';
  register_phone_number: string = '';
  Email: string = '';
  CreatePassword: string = '';
  update: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}
  loading = false;

  fname: any = localStorage.getItem('fname');
  lname: any = localStorage.getItem('lname');
  phonenumber: any = localStorage.getItem('phonenumber');
  email: any = localStorage.getItem('email');
  password: any = localStorage.getItem('password');

  updateData(form: NgForm) {
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

      this.update = 'Updated Successful';
      this.loading = true;
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    } else {
      this.error = 'User Data is Invalid';
    }
  }
}
