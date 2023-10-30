import { Component, OnInit } from '@angular/core';
import { MyproductsService } from '../myproducts.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productdata:Array<any>=[];
  productId:number=0;
  constructor(private ps:MyproductsService,private activateRoute:ActivatedRoute){
    this.productId= this.activateRoute.snapshot.params['id'];
  }
  
  ngOnInit(): void {
    // this.ps.getUsersFromLocalStorage();
    this.productdata = this.ps.productList;
  }
}
