import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined; // define product property

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {} // injecting ActivatedRoute into constructor

  ngOnInit(): void {
    // get the product id from the current route
    const routeParams = this.route.snapshot.paramMap; // access the route parameters using `route.snapshot`
    const productIdFromRoute = Number(routeParams.get('productId'));

    // find the product that corresponds with the id provided in route
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Boom! Added to the cart! ')
  }

  
}
