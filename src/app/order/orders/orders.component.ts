import { CommonModule, CurrencyPipe, NgClass, NgFor, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NgFor, NgClass, CommonModule, TitleCasePipe, CurrencyPipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  orders = [
    { id: 1, OrderDate: new Date().toDateString(), 
      name: 'John Doe', 
      PaymentMethod: 'Apple Pay', 
      ShippingAddress: "Whatever street, 123", 
      ShippingMethod: "Federal Express", 
      BillAmount: 0, 
      Order_Status: 'completed' },
    { id: 2, OrderDate: new Date().toDateString(), name: 'Jane Doe', PaymentMethod: 'Google Pay', ShippingAddress: "", ShippingMethod: "", BillAmount: 0, Order_Status: 'cancelled' },
  ]
}
