import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../myservice.service';

 interface userdetails{
  id:number,email:string,username:string,password:string;
 }
@Component({
  selector: 'app-viewu',
  templateUrl: './viewu.component.html',
  styleUrls: ['./viewu.component.css']
})
export class ViewuComponent {
  cur_user:userdetails|undefined;
  constructor(private act_r:ActivatedRoute , private user_d :MyserviceService){
    this.cur_user=this.user_d.userList[this.act_r.snapshot.params['id']];
  }
}
