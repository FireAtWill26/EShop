import { CommonModule, CurrencyPipe, NgClass, NgFor, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NgFor, NgClass, CommonModule, TitleCasePipe, CurrencyPipe, FormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  status: string[] = ["completed", "cancelled", "order placed"];
  orders = [
    { id: 1, OrderDate: new Date().toDateString(), 
      name: 'John Doe', 
      PaymentMethod: 'Apple Pay', 
      ShippingAddress: "Whatever street, 123", 
      ShippingMethod: "Federal Express", 
      BillAmount: 0, 
      Order_Status: 'completed' },
    { id: 2, OrderDate: new Date().toDateString(), 
      name: 'Jane Doe', 
      PaymentMethod: 'Google Pay', 
      ShippingAddress: "", 
      ShippingMethod: "", 
      BillAmount: 0, 
      Order_Status: 'cancelled' },
  ]
  updateStatus(order: any, status: string) {
    
    order.Order_Status = status.toLowerCase();
  }
}
