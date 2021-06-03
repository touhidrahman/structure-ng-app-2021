import { isFuture } from 'date-fns'
import { parseISO } from 'date-fns/esm'
import { Pipe, PipeTransform } from '@angular/core'

/**
 * Checks the stringified date value of input and decides if the date is in future
 */
@Pipe({
    name: 'isNewArrival',
})
export class IsNewArrivalPipe implements PipeTransform {
    transform(value: unknown): boolean {
        return isFuture(parseISO(value as string))
    }
}
