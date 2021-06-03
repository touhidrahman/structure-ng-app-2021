import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ZorroModule } from '@core/zorro/zorro.module'
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component'
import { CheckoutPaymentFormComponent } from './components/checkout-payment-form/checkout-payment-form.component'
import { CheckoutItemsComponent } from './components/checkout-items/checkout-items.component'

@NgModule({
    declarations: [CheckoutPaymentFormComponent, CheckoutFormComponent, CheckoutItemsComponent],
    imports: [CommonModule, ZorroModule],
    exports: [CheckoutPaymentFormComponent, CheckoutFormComponent, CheckoutItemsComponent],
})
export class CheckoutModule {}
