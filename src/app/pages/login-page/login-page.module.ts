import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { LayoutsModule } from '@features/layouts/layouts.module'
import { LoginPageRoutingModule } from './login-page-routing.module'
import { LoginPageComponent } from './login-page.component'

@NgModule({
    declarations: [LoginPageComponent],
    imports: [CommonModule, CoreModule, LayoutsModule, LoginPageRoutingModule],
})
export class LoginPageModule {}
