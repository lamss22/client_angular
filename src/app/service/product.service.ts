import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductAll():Observable<any>{
    return this.http.get<any>("http://localhost:50454/api/product/all");
  }

  addProduct(product: Product):Observable<any>{
    return this.http.post<any>("http://localhost:50454/api/product/add", product);
  }
}
