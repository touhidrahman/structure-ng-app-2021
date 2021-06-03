import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { ZorroModule } from '@core/zorro/zorro.module'
import { StockCreateFormComponent } from './components/stock-create-form/stock-create-form.component'
import { StockEventFormComponent } from './components/stock-event-form/stock-event-form.component'

@NgModule({
    declarations: [StockCreateFormComponent, StockEventFormComponent],
    imports: [CommonModule, CoreModule, ZorroModule],
    exports: [StockCreateFormComponent, StockEventFormComponent],
    providers: [],
})
export class StocksModule {}
