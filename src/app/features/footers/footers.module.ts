import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FooterDefaultComponent } from './components/footer-default/footer-default.component'

@NgModule({
    declarations: [FooterDefaultComponent],
    exports: [FooterDefaultComponent],
    imports: [CommonModule],
})
export class FootersModule {}
