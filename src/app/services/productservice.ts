import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../domain/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<any>('assets/data/products.json')
        .toPromise()
        .then(res => <Product[]>res.data)
        .then(data => { return data; });
    }
}