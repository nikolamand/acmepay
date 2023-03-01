import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';
import { PaymentMethod } from 'src/app/services/payment';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})

export class PaymentMethodComponent implements OnInit {
  id: number | undefined;
  item: PaymentMethod | undefined;

  constructor(private route: ActivatedRoute, private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id'];

    this.paymentService.getPayment(this.id!.toString()).subscribe((data: any) => {
      this.item = data;
    });
  }

}
