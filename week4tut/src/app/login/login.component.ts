import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){}
  email = "";
  password = "";
  exuser = [{email:"123@gmail.com", password:"123"}, {email: "asd@gmail.com", password:"asc"}];
  itemClicked() {
    let user = {email:this.email, password:this.password};
    if(this.exuser.some(e => e.email === user.email && e.password === user.password)) {
      this.router.navigateByUrl("/account");
    }else {
      alert("Unknown User!");
    }
  }
}
