import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
    selector: 'app-stock-event-form',
    templateUrl: './stock-event-form.component.html',
    styleUrls: ['./stock-event-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockEventFormComponent {}
