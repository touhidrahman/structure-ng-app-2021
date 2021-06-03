import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { PipesModule } from '@core/pipes/pipes.module'
import { LayoutsModule } from '@features/layouts/layouts.module'
import { StocksModule } from '@features/stocks/stocks.module'
import { AdminCategoriesListComponent } from './admin-categories-list/admin-categories-list.component'
import { AdminCategoriesPageRoutingModule } from './admin-categories-page-routing.module'
import { AdminCategoriesPageComponent } from './admin-categories-page.component'
import { AdminCategoriesPageService } from './admin-categories-page.service'

@NgModule({
    declarations: [AdminCategoriesPageComponent, AdminCategoriesListComponent],
    imports: [CommonModule, CoreModule, LayoutsModule, StocksModule, PipesModule, AdminCategoriesPageRoutingModule],
    providers: [AdminCategoriesPageService],
})
export class AdminCategoriesPageModule {}
