import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-checkout-form',
    templateUrl: './checkout-form.component.html',
    styleUrls: ['./checkout-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutFormComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
