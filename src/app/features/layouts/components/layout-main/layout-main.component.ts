import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
    selector: 'app-layout-main',
    templateUrl: './layout-main.component.html',
    styleUrls: ['./layout-main.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutMainComponent {}
