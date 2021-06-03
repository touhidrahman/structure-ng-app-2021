import { Pipe, PipeTransform } from '@angular/core'
import { Stock } from '@features/stocks/interfaces/stock'
import { getUniqueColors } from '../utils/products.util'

@Pipe({
    name: 'productColors',
})
export class ProductColorsPipe implements PipeTransform {
    transform(stocks: Stock[]): string[] {
        return getUniqueColors(stocks)
    }
}
