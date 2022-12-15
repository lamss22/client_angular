import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  product: Array<any> = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductAll().subscribe(data => {
      this.product = data;
    })
  }
}
