import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CheckoutModule } from '@features/checkout/checkout.module'
import { AppBreadcrumbModule } from '@shared/app-breadcrumb/app-breadcrumb.module'
import { CheckoutPaymentPageRoutingModule } from './checkout-payment-page-routing.module'
import { CheckoutPaymentPageComponent } from './checkout-payment-page.component'

@NgModule({
    declarations: [CheckoutPaymentPageComponent],
    imports: [CommonModule, CheckoutModule, AppBreadcrumbModule, CheckoutPaymentPageRoutingModule],
})
export class CheckoutPaymentPageModule {}
