import { Observable } from 'rxjs'
import { Component } from '@angular/core'
import { Product } from '@features/products/interfaces/product'
import { ProductService } from '@features/products/services/product.service'

@Component({
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
    products$: Observable<Product[]> = this.productService.find({ _limit: 12 })

    constructor(private productService: ProductService) {}
}
