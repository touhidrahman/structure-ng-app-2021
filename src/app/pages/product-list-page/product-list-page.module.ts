import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { LayoutsModule } from '@features/layouts/layouts.module'
import { ProductsModule } from '@features/products/products.module'
import { AppAccordionModule } from '@shared/app-accordion/app-accordion.module'
import { AppBreadcrumbModule } from '@shared/app-breadcrumb/app-breadcrumb.module'
import { AppGalleryModule } from '@shared/app-gallery/app-gallery.module'
import { AppTabsModule } from '@shared/app-tabs/app-tabs.module'
import { ProductListPageRoutingModule } from './product-list-page-routing.module'
import { ProductListPageComponent } from './product-list-page.component'

@NgModule({
    declarations: [ProductListPageComponent],
    imports: [
        CommonModule,

        ProductsModule,
        AppBreadcrumbModule,
        AppTabsModule,
        AppGalleryModule,
        LayoutsModule,
        AppAccordionModule,
        ProductListPageRoutingModule,
    ],
})
export class ProductListPageModule {}
