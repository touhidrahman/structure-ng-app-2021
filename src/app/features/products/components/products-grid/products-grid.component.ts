import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { Product } from '@features/products/interfaces/product'

@Component({
    selector: 'app-products-grid',
    templateUrl: './products-grid.component.html',
    styleUrls: ['./products-grid.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsGridComponent {
    @Input() products: Product[] = []
}
