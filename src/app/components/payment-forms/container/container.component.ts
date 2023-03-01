import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';
import { PaymentMethod } from 'src/app/services/payment';

@Component({
  selector: 'app-form-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  item: PaymentMethod | undefined;
  id: number | undefined;

  constructor(private paymentService: PaymentService, private router: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.queryParams['id'];
    if(!this.id) return;
    this.paymentService.getPayment(this.id!.toString()).subscribe((data: any) => {
      this.item = data;
    });
  }


}
