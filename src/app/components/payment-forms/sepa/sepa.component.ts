import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';
import { PaymentMethod } from 'src/app/services/payment';

@Component({
  selector: 'app-sepa',
  templateUrl: './sepa.component.html',
  styleUrls: ['./sepa.component.scss']
})
export class SepaComponent implements OnInit {
  id: number | undefined;
  item: PaymentMethod | undefined;
  sepaForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private paymentService: PaymentService) {
    this.sepaForm = this.fb.group({
      iban: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(32), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      bic: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      accountHolder: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(50)]],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id'];
    this.paymentService.getPayment(this.id?.toString()!).subscribe((data: any) => {
      this.item = data;
    });
  }

  onSubmit() {
    if (this.sepaForm.valid) {
      this.paymentService.pay(this.item!, this.sepaForm.value).subscribe((data: any) => {
        this.router.navigate(['/success'], { queryParams: { id: this.id } });
      });
    }
  }

}
