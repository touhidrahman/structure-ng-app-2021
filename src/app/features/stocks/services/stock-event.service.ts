import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BaseService } from '@core/services/base.service'
import { StockEvent, StockEventDto } from '../interfaces/stock-event'

@Injectable({
    providedIn: 'root',
})
export class StockEventService extends BaseService<StockEvent, StockEventDto> {
    constructor(http: HttpClient) {
        super(http, '/stock-events')
    }
}
