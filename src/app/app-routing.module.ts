import { CustomerConsultComponent } from './pages/customer-consult/customer-consult.component';
import { CustomerRegisterComponent } from './pages/customer-register/customer-register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'register'
  },
  {
    path: 'register',
    component: CustomerRegisterComponent
  },
  {
    path: 'consult',
    component: CustomerConsultComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
