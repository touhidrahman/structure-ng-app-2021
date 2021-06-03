import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { Product } from '@features/products/interfaces/product'
import { BreadcrumbConfig } from '@shared/app-breadcrumb/interfaces/breadcrumb-config'

@Component({
    selector: 'app-product-breadcrumb',
    templateUrl: './product-breadcrumb.component.html',
    styleUrls: ['./product-breadcrumb.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductBreadcrumbComponent {
    private _product: Product | null = null

    breadcrumbConfigs: BreadcrumbConfig[] = []

    @Input() set product(value: Product | null) {
        if (!value) return
        this._product = value

        this.breadcrumbConfigs = this.buildBreadcrumb(value)
    }
    get product() {
        return this._product
    }

    private buildBreadcrumb(product: Product): BreadcrumbConfig[] {}
}
