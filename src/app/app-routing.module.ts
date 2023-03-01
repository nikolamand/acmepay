import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisaComponent } from './components/payment-forms/visa/visa.component';
import { SepaComponent } from './components/payment-forms/sepa/sepa.component';
import { PaymentMethodComponent } from './components/payment-forms/payment-method/payment-method.component';
import { HomeComponent } from './components/home/home.component';
import { SuccessComponent } from './components/payment-forms/success/success.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'payment', component: PaymentMethodComponent },
  { path: 'visa', component: VisaComponent },
  { path: 'sepa', component: SepaComponent },
  { path: 'success', component: SuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
