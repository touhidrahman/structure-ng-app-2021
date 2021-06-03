import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { PipesModule } from '@core/pipes/pipes.module'
import { AppAccordionModule } from '@shared/app-accordion/app-accordion.module'
import { AppBreadcrumbModule } from '@shared/app-breadcrumb/app-breadcrumb.module'
import { ProductBreadcrumbComponent } from './components/product-breadcrumb/product-breadcrumb.component'
import { ProductCardComponent } from './components/product-card/product-card.component'
import { ProductDetailsAccordionComponent } from './components/product-details-accordion/product-details-accordion.component'
import { ProductsFilterComponent } from './components/products-filter/products-filter.component'
import { ProductsGridComponent } from './components/products-grid/products-grid.component'
import { AvailableSizesPipe } from './pipes/available-sizes.pipe'
import { IsNewArrivalPipe } from './pipes/is-new-arrival.pipe'
import { ProductColorsPipe } from './pipes/product-colors.pipe'
import { ProductPricePipe } from './pipes/product-price.pipe'

@NgModule({
    declarations: [
        ProductCardComponent,
        ProductsGridComponent,
        ProductsFilterComponent,
        IsNewArrivalPipe,
        AvailableSizesPipe,
        ProductPricePipe,
        ProductColorsPipe,
        ProductDetailsAccordionComponent,
        ProductBreadcrumbComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        PipesModule,
        FormsModule,
        ReactiveFormsModule,
        AppAccordionModule,
        AppBreadcrumbModule,
    ],
    exports: [
        ProductCardComponent,
        ProductsGridComponent,
        ProductsFilterComponent,
        ProductPricePipe,
        ProductColorsPipe,
        ProductDetailsAccordionComponent,
        ProductBreadcrumbComponent,
    ],
})
export class ProductsModule {}
