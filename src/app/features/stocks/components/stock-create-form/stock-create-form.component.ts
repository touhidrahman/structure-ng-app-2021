import { ChangeDetectionStrategy, Component } from '@angular/core'
import { StockFormService } from '@features/stocks/services/stock-form.service'

@Component({
    selector: 'app-stock-create-form',
    templateUrl: './stock-create-form.component.html',
    styleUrls: ['./stock-create-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [StockFormService],
})
export class StockCreateFormComponent {}
