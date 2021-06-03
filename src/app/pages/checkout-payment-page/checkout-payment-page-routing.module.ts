import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CheckoutPaymentPageComponent } from './checkout-payment-page.component'

const routes: Routes = [{ path: '', component: CheckoutPaymentPageComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CheckoutPaymentPageRoutingModule {}
