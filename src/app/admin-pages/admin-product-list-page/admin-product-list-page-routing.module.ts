import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminProductListPageComponent } from './admin-product-list-page.component'

const routes: Routes = [{ path: '', component: AdminProductListPageComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminProductListPageRoutingModule {}
