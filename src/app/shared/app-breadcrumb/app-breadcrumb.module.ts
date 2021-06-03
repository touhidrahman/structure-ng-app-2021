import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component'

@NgModule({
    declarations: [BreadcrumbComponent],
    imports: [CommonModule, RouterModule],
    exports: [BreadcrumbComponent],
})
export class AppBreadcrumbModule {}
