import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { LayoutsModule } from '@features/layouts/layouts.module'
import { ProductListPageService } from '@features/products/services/product-list-page.service'
import { AdminProductListPageRoutingModule } from './admin-product-list-page-routing.module'
import { AdminProductListPageComponent } from './admin-product-list-page.component'
import { AdminProductsListComponent } from './admin-products-list/admin-products-list.component'

@NgModule({
    declarations: [AdminProductListPageComponent, AdminProductsListComponent],
    imports: [CommonModule, LayoutsModule, AdminProductListPageRoutingModule],
    providers: [ProductListPageService],
})
export class AdminProductListPageModule {}
