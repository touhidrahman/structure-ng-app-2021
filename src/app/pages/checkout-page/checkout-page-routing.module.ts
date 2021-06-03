import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CheckoutPageComponent } from './checkout-page.component'

const routes: Routes = [{ path: '', component: CheckoutPageComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CheckoutPageRoutingModule {}
