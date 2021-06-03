import { min } from 'lodash-es'
import { Pipe, PipeTransform } from '@angular/core'
import { Stock } from '@features/stocks/interfaces/stock'

@Pipe({
    name: 'productPrice',
})
export class ProductPricePipe implements PipeTransform {
    transform(stocks: Stock[]): number {
        const prices = stocks.map((stock) => stock.price)
        const minimum = min([...prices])
        return minimum ?? 0
    }
}
