import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BaseService } from '@core/services/base.service'
import { Stock, StockDto } from '../interfaces/stock'

@Injectable({
    providedIn: 'root',
})
export class StockService extends BaseService<Stock, StockDto> {
    constructor(http: HttpClient) {
        super(http, '/stocks')
    }
}
