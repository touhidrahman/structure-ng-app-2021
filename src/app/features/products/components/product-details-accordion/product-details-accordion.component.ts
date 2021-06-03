import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
    selector: 'app-product-details-accordion',
    templateUrl: './product-details-accordion.component.html',
    styleUrls: ['./product-details-accordion.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsAccordionComponent {}
