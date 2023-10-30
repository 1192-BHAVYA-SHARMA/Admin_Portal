import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyproductsService } from '../myproducts.service';

interface productdetails{
  id:number,title:string,price:number,description:string,category:string,image:string,
  rating:{rate:number,count:number}
}
@Component({
  selector: 'app-viewp',
  templateUrl: './viewp.component.html',
  styleUrls: ['./viewp.component.css']
})
export class ViewpComponent {
  cur_product:productdetails;
  constructor(private actr:ActivatedRoute,private prod_d:MyproductsService){
this.cur_product=this.prod_d.productList[this.actr.snapshot.params['id']];
    }

}
