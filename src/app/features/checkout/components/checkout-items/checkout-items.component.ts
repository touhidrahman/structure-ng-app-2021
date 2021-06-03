import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-checkout-items',
    templateUrl: './checkout-items.component.html',
    styleUrls: ['./checkout-items.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutItemsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
