import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ZorroModule } from '@core/zorro/zorro.module'
import { HeaderMegamenuComponent } from './components/header-megamenu/header-megamenu.component'
import { HeaderOneComponent } from './components/header-one/header-one.component'

@NgModule({
    declarations: [HeaderMegamenuComponent, HeaderOneComponent],
    exports: [HeaderMegamenuComponent, HeaderOneComponent],
    imports: [CommonModule, RouterModule, ZorroModule],
})
export class HeadersModule {}
