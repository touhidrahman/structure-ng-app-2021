import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { LayoutsModule } from '@features/layouts/layouts.module'
import { AdminProductEditPageRoutingModule } from './admin-product-edit-page-routing.module'
import { AdminProductEditPageComponent } from './admin-product-edit-page.component'

@NgModule({
    declarations: [AdminProductEditPageComponent],
    imports: [CommonModule, CoreModule, LayoutsModule, AdminProductEditPageRoutingModule],
})
export class AdminProductEditPageModule {}
