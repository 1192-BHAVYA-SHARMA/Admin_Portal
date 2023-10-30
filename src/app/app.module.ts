import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { ProductComponent } from './product/product.component';
import { MarketComponent } from './market/market.component';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EdituComponent } from './editu/editu.component';
import { ViewuComponent } from './viewu/viewu.component';
import { CreateuComponent } from './createu/createu.component';
import { EditpComponent } from './editp/editp.component';
import { ViewpComponent } from './viewp/viewp.component';
import { CreatepComponent } from './createp/createp.component';
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    CardComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    ProductComponent,
    MarketComponent,
    CartComponent,
    EdituComponent,
    ViewuComponent,
    CreateuComponent,
    EditpComponent,
    ViewpComponent,
    CreatepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
