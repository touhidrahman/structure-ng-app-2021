import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { LayoutsModule } from '@features/layouts/layouts.module'
import { ProductsModule } from '@features/products/products.module'
import { AppAccordionModule } from '@shared/app-accordion/app-accordion.module'
import { AppBreadcrumbModule } from '@shared/app-breadcrumb/app-breadcrumb.module'
import { AppGalleryModule } from '@shared/app-gallery/app-gallery.module'
import { AppTabsModule } from '@shared/app-tabs/app-tabs.module'
import { ProductDetailsPageRoutingModule } from './product-details-page-routing.module'
import { ProductDetailsPageComponent } from './product-details-page.component'

@NgModule({
    declarations: [ProductDetailsPageComponent],
    imports: [
        CommonModule,

        ProductsModule,
        AppBreadcrumbModule,
        AppTabsModule,
        LayoutsModule,
        AppGalleryModule,
        AppAccordionModule,
        ProductDetailsPageRoutingModule,
    ],
})
export class ProductDetailsPageModule {}
