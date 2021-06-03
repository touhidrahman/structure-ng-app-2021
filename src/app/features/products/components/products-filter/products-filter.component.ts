import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
    selector: 'app-products-filter',
    templateUrl: './products-filter.component.html',
    styleUrls: ['./products-filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsFilterComponent {}
