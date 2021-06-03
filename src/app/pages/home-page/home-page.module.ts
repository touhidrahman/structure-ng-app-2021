import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { LayoutsModule } from '@features/layouts/layouts.module'
import { ProductsModule } from '@features/products/products.module'
import { AppCarouselModule } from '@shared/app-carousel/app-carousel.module'
import { HomePageRoutingModule } from './home-page-routing.module'
import { HomePageComponent } from './home-page.component'

@NgModule({
    declarations: [HomePageComponent],
    imports: [CommonModule, LayoutsModule, AppCarouselModule, ProductsModule, HomePageRoutingModule],
})
export class HomePageModule {}
