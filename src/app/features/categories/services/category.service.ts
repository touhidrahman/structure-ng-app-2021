import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BaseService } from '@core/services/base.service'
import { Category, CategoryDto } from '../interfaces/category'

@Injectable({
    providedIn: 'root',
})
export class CategoryService extends BaseService<Category, CategoryDto> {
    constructor(protected http: HttpClient) {
        super(http, '/categories')
    }
}
