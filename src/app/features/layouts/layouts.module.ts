import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { FootersModule } from '@features/footers/footers.module'
import { HeadersModule } from '@features/headers/headers.module'
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component'
import { LayoutMainComponent } from './components/layout-main/layout-main.component'

@NgModule({
    declarations: [LayoutAdminComponent, LayoutMainComponent],
    exports: [LayoutAdminComponent, LayoutMainComponent],
    imports: [CommonModule, CoreModule, HeadersModule, FootersModule],
})
export class LayoutsModule {}
