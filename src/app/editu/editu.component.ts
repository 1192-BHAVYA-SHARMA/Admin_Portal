import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute, Route } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editu',
  templateUrl: './editu.component.html',
  styleUrls: ['./editu.component.css']
})
export class EdituComponent {
  // user: User;
  edituser:FormGroup;
  constructor( private msu:MyserviceService,private act_r:ActivatedRoute,
    // private route:Route
    ){
      this.edituser=new FormGroup({
        'username': new FormControl(''),
        'email': new FormControl(''),
        'phoneno':new FormControl(''),
        'passward': new FormControl('')
      })
    }
  ngOnInit(): void {
    // const id = this.route.snapshot.params['id'];
    // // this.msu.getUserById(id).subscribe((data: User) => {
    //   this.user = data;
    };

    onEdit() {
      const id = this.act_r.snapshot.params['id']; // get the ID of the user being edited from the activated route
      const editedUser = this.edituser.value; // get the updated values from the form
    
      // // call the MyserviceService to update the user with the new values
      // this.msu.updateUser(id, editedUser).subscribe((updatedUser) => {
      //   if (updatedUser) {
      //     // Handle the case where updateUser returns a userd object
      //     console.log('User updated:', updatedUser);
      //     // Display a success message if needed
      //   } else {
      //     // Handle the case where updateUser returns null
      //     console.log('User not found');
      //     // Display an error message if needed
      //   }
      // });
    }

   
}

