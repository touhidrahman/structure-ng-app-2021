import { Pipe, PipeTransform } from '@angular/core'
import { Stock } from '@features/stocks/interfaces/stock'
import { getUniqueSizes } from '../utils/products.util'

@Pipe({
    name: 'availableSizes',
})
export class AvailableSizesPipe implements PipeTransform {
    transform(stocks: Stock[]): string {
        return getUniqueSizes(stocks).join('  ')
    }
}
