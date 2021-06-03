import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminProductEditPageComponent } from './admin-product-edit-page.component'

const routes: Routes = [{ path: '', component: AdminProductEditPageComponent }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminProductEditPageRoutingModule {}
