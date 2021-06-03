import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'ceiling',
})
export class CeilingPipe implements PipeTransform {
    transform(value: number): number {
        return Math.ceil(value)
    }
}
