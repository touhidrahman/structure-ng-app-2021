import { Component } from '@angular/core'
import { ProductListPageService } from '../../features/products/services/product-list-page.service'

@Component({
    templateUrl: './product-list-page.component.html',
    styleUrls: ['./product-list-page.component.scss'],
    providers: [ProductListPageService],
})
export class ProductListPageComponent {}
