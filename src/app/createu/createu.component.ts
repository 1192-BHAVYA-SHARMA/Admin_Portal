import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-createu',
  templateUrl: './createu.component.html',
  styleUrls: ['./createu.component.css']
})
export class CreateuComponent {

  new_userdata:FormGroup;
  constructor(private userService: MyserviceService){
    this.new_userdata = new FormGroup({
      'username': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phoneno': new FormControl('',[Validators.required,Validators.minLength(10)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]
      )
    }
    )}

  ngOnInit(): void {
    this.userService.getUsersFromLocalStorage();
  }
  createnewuser() {
    if (this.new_userdata.valid) {
      const userNew = this.new_userdata.value;
      this.userService.createUser(userNew);
      this.new_userdata.reset();
      alert("User registered successfully");
    } else {
      alert("Please fill all the required fields and make sure passwords match and meet requirements.");
    }
  }
}
