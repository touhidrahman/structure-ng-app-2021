import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ZorroModule } from '@core/zorro/zorro.module'
import { AccordionComponent } from './components/accordion/accordion.component'

@NgModule({
    declarations: [AccordionComponent],
    imports: [CommonModule, ZorroModule],
    exports: [AccordionComponent],
})
export class AppAccordionModule {}
