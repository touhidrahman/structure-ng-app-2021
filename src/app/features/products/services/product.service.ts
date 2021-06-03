import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BaseService } from '@core/services/base.service'
import { Product } from '../interfaces/product'

@Injectable({
    providedIn: 'root',
})
export class ProductService extends BaseService<Product, Partial<Product>> {
    constructor(protected http: HttpClient) {
        super(http, '/products')
    }
}
