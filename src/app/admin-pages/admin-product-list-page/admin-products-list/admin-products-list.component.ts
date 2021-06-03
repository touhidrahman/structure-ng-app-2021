import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
    selector: 'app-admin-products-list',
    templateUrl: './admin-products-list.component.html',
    styleUrls: ['./admin-products-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminProductsListComponent {}
