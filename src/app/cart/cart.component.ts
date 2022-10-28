import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
// import { ActivatedRoute } from '@angular/router';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: Product[] | undefined;
  constructor(
    private cartService: CartService // private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.products = this.cartService.getItems();
  }
}
