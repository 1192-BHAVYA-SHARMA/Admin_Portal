import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface userd{
  id:number,email:string,username:string,password:string,phoneno:number;
}

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  userList:Array<userd>=[
  {id:1,email:"john@gmail.com",username:"johnd",password:"m38rmF$", phoneno:1234567890},
  {id:2,email:"morrison@gmail.com",username:"mor_2314",password:"83r5^_",phoneno:9876543210},
  {id:3,email:"kevin@gmail.com",username:"kevinryan",password:"kev02937@",phoneno:8907654321}
  ]
  constructor() {  this.getUsersFromLocalStorage();}

  // checkUser(email: string, password: string): boolean {
  //   const user = this.userList.find(u => u.email === email && u.password === password);
  //   return !!user;
  // }
  checkUser(email: string, password: string): userd | null {
    const user = this.userList.find(u => u.email === email && u.password === password);
    return user ? user : null;
  }
  createUser(userNew: userd) {
    const id = this.userList.length + 1;
    const newUser: userd = {
      id: id,
      email: userNew.email,
      username: userNew.username,
      password: userNew.password,
      phoneno: userNew.phoneno
    };
    this.userList.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.userList));
  }
  // updateUser(id: number, updatedUser: userd): Observable<userd|null> {
  //   const index = this.userList.findIndex(u => u.id === id);
  //   if (index !== -1) {
  //     this.userList[index] = updatedUser;
  //     localStorage.setItem('users', JSON.stringify(this.userList));
  //     return of(this.userList[index]);
  //   }
  //   return null;
  // }

  // getUserById(id: number): Observable<userd > {
  //   const user = this.userList.find(u => u.id === id);
  //   return of(user);
  // }

  getUsersFromLocalStorage() {
    const users = localStorage.getItem('users');
    if (users) {
      this.userList = JSON.parse(users);
    }
  }
}
