import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';
import { PaymentMethod } from 'src/app/services/payment';

@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.scss']
})
export class VisaComponent implements OnInit {
  visaForm: FormGroup;
  id: number | undefined;
  item: PaymentMethod | undefined;

  constructor(private formBuilder: FormBuilder, private paymentService: PaymentService, private route: ActivatedRoute, private router: Router) {    this.visaForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required, this.luhnValidator]],
      expirationDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      cardHolder: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(50)]]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id'];
    this.paymentService.getPayment(this.id!.toString()).subscribe((data: any) => {
      this.item = data;
    });
  }

  onSubmit() {
    this.paymentService.pay(this.item!, this.visaForm.value).subscribe((data: any) => {
      this.router.navigate(['/success'], { queryParams: { id: this.id } });
    });
  }

  luhnValidator(control: any) {
    const cardNumber = control.value;
    const cardNumberWithoutSpaces = cardNumber.replace(/\s/g, '');
    if (/[^0-9-\s]+/.test(cardNumber)) {
      return { invalid: true };
    }
    let sum = 0;
    let isSecond = false;
    for (let i = cardNumberWithoutSpaces.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumberWithoutSpaces.charAt(i), 10);
      if (isSecond) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      isSecond = !isSecond;
    }
    if (sum % 10 !== 0) {
      return { invalid: true };
    }
    return null;
  }
}
