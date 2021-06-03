import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductListPageComponent } from './product-list-page.component'

const routes: Routes = [{ path: '', component: ProductListPageComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductListPageRoutingModule {}
