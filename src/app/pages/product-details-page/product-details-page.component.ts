import { Component } from '@angular/core'
import { ProductDetailsPageService } from './product-details-page.service'

@Component({
    templateUrl: './product-details-page.component.html',
    styleUrls: ['./product-details-page.component.scss'],
    providers: [ProductDetailsPageService],
})
export class ProductDetailsPageComponent {}
