import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CoreModule } from '@core/core.module'
import { FootersModule } from '@features/footers/footers.module'
import { HeadersModule } from '@features/headers/headers.module'
import { RegisterPageRoutingModule } from './register-page-routing.module'
import { RegisterPageComponent } from './register-page.component'

@NgModule({
    declarations: [RegisterPageComponent],
    imports: [CommonModule, CoreModule, HeadersModule, FootersModule, RegisterPageRoutingModule],
})
export class RegisterPageModule {}
