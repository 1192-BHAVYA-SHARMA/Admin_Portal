import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
existUser: FormGroup;
  ngZone: any;
constructor( private userservice:MyserviceService, private router: Router){
  this.existUser=new FormGroup({
    'l_email': new FormControl('',[Validators.required, Validators.email]),
    'l_pass':new FormControl('',[Validators.required]) 
  })
}
onSignIn() {
  const email = this.existUser.controls['l_email'].value;
  const password = this.existUser.controls['l_pass'].value;
  const match = this.userservice.checkUser(email, password);

  if (match) {
    this.router.navigate(['/market']);
  }else{
        alert('Invalid email or password!');
  }
}

}
