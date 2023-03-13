import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'home', component: HomeComponent, title: 'Home' },
  {path: 'product', component: ProductListComponent ,title: 'Products' },
  {path: 'product-details/:id', component: ProductDetailsComponent ,title: 'Products' },
  {path: 'form/:id', component: FormComponent , title: 'Order'},
  {path: 'login', component: LoginComponent ,title: 'Login'},
  {path: 'signup', component: SignupComponent ,title: 'Signup'},
  {path: 'change-password', component: ChangePasswordComponent ,title: 'Password Change'},
  {path: 'forgot-password', component: ForgotPasswordComponent ,title: 'Forgot Password'},
  {path: 'profile', component: ProfileComponent ,title: 'Profile'},
  {path: 'myaccount', component: MyAccountComponent ,title: 'MyAccount'},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
