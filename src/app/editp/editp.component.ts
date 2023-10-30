import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyproductsService } from '../myproducts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editp',
  templateUrl: './editp.component.html',
  styleUrls: ['./editp.component.css']
})
export class EditpComponent {
  product_detail:FormGroup;
  success: boolean = false; // define the success property with a default value of false
  constructor(private myp:MyproductsService,private actr:ActivatedRoute){
    this.product_detail=new FormGroup({
      'p_title':new FormControl('',Validators.required),
      'p_price':new FormControl('',Validators.required),
      'p_des':new FormControl('',Validators.required),
      'p_rating':new FormControl('',Validators.required),
      'p_img': new FormControl('')
    })
  }
    onEditp(){
      const id = this.actr.snapshot.params['id']; // get the ID of the user being edited from the activated route
      const editedProduct = this.product_detail.value;
      
      // call the service to edit the product details
      this.myp.editProduct(id, editedProduct).subscribe(
        (response) => {
          this.success = true;
          alert("product edited succesfully"); // show the success alert
        },
        (error) => {
          console.log(error);
        }
      );
  
    }
  }