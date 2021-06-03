import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { Product } from '@features/products/interfaces/product'

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
    @Input() product: Product | null = null
}
