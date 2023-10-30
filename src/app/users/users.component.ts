import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userdata:Array<any>=[];
   userId : number = 0;
  constructor(private mys:MyserviceService, private  activeRoute : ActivatedRoute ){
   this.userId= this.activeRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.mys.getUsersFromLocalStorage();
    this.userdata = this.mys.userList;
  }

  
}
