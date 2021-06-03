import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Stock, StockDto } from '../interfaces/stock'
import { StockService } from './stock.service'

@Injectable()
export class StockFormService {
    private stockForm: FormGroup

    constructor(private formBuilder: FormBuilder, private stockService: StockService) {
        this.stockForm = this.formBuilder.group({})
    }

    getStockForm(): FormGroup {
        return this.stockForm
    }

    fillForm(stock: Stock): void {}

    getValue(): StockDto {
        return this.stockForm.value
    }

    saveValues$(stockId?: string): Observable<Stock> {}

    resetForm() {
        this.stockForm.reset()
    }
}
