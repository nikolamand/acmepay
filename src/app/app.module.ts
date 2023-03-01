import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDataService } from './mock-data.service';
import { VisaComponent } from './components/payment-forms/visa/visa.component';
import { SepaComponent } from './components/payment-forms/sepa/sepa.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { PaymentMethodComponent } from './components/payment-forms/payment-method/payment-method.component';
import { HomeComponent } from './components/home/home.component';
import { ContainerComponent } from './components/payment-forms/container/container.component';
import { SuccessComponent } from './components/payment-forms/success/success.component';



@NgModule({
  declarations: [
    AppComponent,
    VisaComponent,
    SepaComponent,
    ItemListComponent,
    PaymentMethodComponent,
    HomeComponent,
    ContainerComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(MockDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
