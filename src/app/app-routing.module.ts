import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'product', component: ProductListComponent },
  {path: 'product-details/:id', component: ProductDetailsComponent },
  {path: 'form/:id', component: FormComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: SignupComponent },
  {path: 'log', component: DummyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
