import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CheckoutModule } from '@features/checkout/checkout.module'
import { FootersModule } from '@features/footers/footers.module'
import { HeadersModule } from '@features/headers/headers.module'
import { AppBreadcrumbModule } from '@shared/app-breadcrumb/app-breadcrumb.module'
import { CheckoutPageRoutingModule } from './checkout-page-routing.module'
import { CheckoutPageComponent } from './checkout-page.component'

@NgModule({
    declarations: [CheckoutPageComponent],
    imports: [
        CommonModule,
        CheckoutModule,
        HeadersModule,
        FootersModule,

        AppBreadcrumbModule,
        CheckoutPageRoutingModule,
    ],
})
export class CheckoutPageModule {}
