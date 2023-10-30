import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { ProductComponent } from './product/product.component';
import { MarketComponent } from './market/market.component';
import { CartComponent } from './cart/cart.component';
import { EdituComponent } from './editu/editu.component';
import { ViewuComponent } from './viewu/viewu.component';
import { CreateuComponent } from './createu/createu.component';
import { ViewpComponent } from './viewp/viewp.component';
import { EditpComponent } from './editp/editp.component';
import { CreatepComponent } from './createp/createp.component';

const routes: Routes = [
  //dashboard is the root domain.
  { path: "dashboard", component: DashboardComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "users", component: UsersComponent,
    children: [
      { path: "view/:id", component: ViewuComponent },
      { path: "edit/:id", component: EdituComponent },
      { path: "create_u", component: CreateuComponent }]
  },

  {
    path: "product",
    component: ProductComponent,
    children: [{
      path: "view_p/:id",
      component: ViewpComponent
    }, {
      path: "edit_p/:id",
      component: EditpComponent
    },{ path: "create_p", 
    component: CreatepComponent
       }
    ]
  },
  { path: "market", component: MarketComponent },
  { path: "cart", component: CartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
