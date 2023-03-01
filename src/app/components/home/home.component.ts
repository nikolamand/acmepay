import { Component, OnInit } from '@angular/core';
import { PaymentMethodComponent } from '../payment-forms/payment-method/payment-method.component';
import { PaymentService } from 'src/app/services/payment.service';
import { PaymentMethod } from 'src/app/services/payment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  payments: PaymentMethod[] = [];

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.paymentService.getPayments().subscribe((data: any) => {
      this.payments = data;
    });
  }

  setItem(item: PaymentMethod) {
    this.paymentService.setSelectedItem(item);
  }

}
