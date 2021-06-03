import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { BreadcrumbConfig } from '@shared/app-breadcrumb/interfaces/breadcrumb-config'

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {
    @Input() breadcrumbConfigs: BreadcrumbConfig[] = []
    @Input() lastItem = ''
}
