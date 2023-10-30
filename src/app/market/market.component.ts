import { Component, OnInit } from '@angular/core';
import { MyproductsService } from '../myproducts.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit{
  productdata:Array<any>=[];
  constructor(private ps:MyproductsService){}
  ngOnInit(): void {
this.productdata=this.ps.productList;
  }
}
