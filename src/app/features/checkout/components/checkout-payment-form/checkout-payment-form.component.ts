import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
    selector: 'app-checkout-payment-form',
    templateUrl: './checkout-payment-form.component.html',
    styleUrls: ['./checkout-payment-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutPaymentFormComponent {}
