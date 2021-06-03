import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
    selector: 'app-header-one',
    templateUrl: './header-one.component.html',
    styleUrls: ['./header-one.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderOneComponent {}
