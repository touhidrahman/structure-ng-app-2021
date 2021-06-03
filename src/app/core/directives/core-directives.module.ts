import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HideDirective } from './hide/hide.directive'

@NgModule({
    declarations: [HideDirective],
    imports: [CommonModule],
    exports: [HideDirective],
    providers: [],
})
export class CoreDirectivesModule {}
