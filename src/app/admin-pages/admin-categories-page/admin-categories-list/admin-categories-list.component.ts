import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
    selector: 'app-admin-categories-list',
    templateUrl: './admin-categories-list.component.html',
    styleUrls: ['./admin-categories-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminCategoriesListComponent {}
