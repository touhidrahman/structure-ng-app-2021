import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
    selector: 'app-layout-admin',
    templateUrl: './layout-admin.component.html',
    styleUrls: ['./layout-admin.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutAdminComponent {}
