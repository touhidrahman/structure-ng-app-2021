import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BaseService } from '@core/services/base.service'
import { ProductType, ProductTypeDto } from '../interfaces/product-type'

@Injectable({
    providedIn: 'root',
})
export class ProductTypeService extends BaseService<ProductType, ProductTypeDto> {
    constructor(protected http: HttpClient) {
        super(http, '/product-types')
    }
}
