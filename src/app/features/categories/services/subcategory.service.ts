import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BaseService } from '@core/services/base.service'
import { Subcategory } from '../interfaces/subcategory'

@Injectable({
    providedIn: 'root',
})
export class SubcategoryService extends BaseService<Subcategory, Partial<Subcategory>> {
    constructor(protected http: HttpClient) {
        super(http, '/subcategories')
    }
}
