import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentMethod } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private paymentMethodsUrl = 'api/payments';
  private selectedItem: PaymentMethod | undefined;

  constructor(private http: HttpClient) { }

  getPayments(): Observable<PaymentMethod[]> {
    return this.http.get<PaymentMethod[]>(this.paymentMethodsUrl);
  }

  getPayment(paymentMethodId: string): Observable<PaymentMethod> {
    const url = `${this.paymentMethodsUrl}/${paymentMethodId}`;
    return this.http.get<PaymentMethod>(url);
  }

  getSelectedItem(): PaymentMethod | undefined {
    return this.selectedItem;
  }

  setSelectedItem(item: PaymentMethod) {
    this.selectedItem = item;
  }

  pay(item: PaymentMethod, info: any) {
    const url = `${this.paymentMethodsUrl}/pay`;
    return this.http.post(url, { item, info });
  }

}