import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product!: Product; // value passed in from parent, `ProductListComponent`
  @Output() notify = new EventEmitter(); // allows `ProductAlertsCompoenent` to emit an event when the `notify` property changes
  
  constructor() { }
  ngOnInit(): void {
  }

}
