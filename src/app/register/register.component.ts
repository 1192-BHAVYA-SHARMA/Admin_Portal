import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newuserdata: FormGroup;
  
  constructor(private userService: MyserviceService) {
    this.newuserdata = new FormGroup({
      'username': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phoneno': new FormControl('',[Validators.required,Validators.minLength(10)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'confirmPassword': new FormControl('', [Validators.required])
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.userService.getUsersFromLocalStorage();
  }

  onSignUp() {
    if (this.newuserdata.valid) {
      const userNew = this.newuserdata.value;
      this.userService.createUser(userNew);
      this.newuserdata.reset();
      alert("User registered successfully");
    } else {
      alert("Please fill all the required fields and make sure passwords match and meet requirements.");
    }
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    } else {
      return null;
    }
  };
}