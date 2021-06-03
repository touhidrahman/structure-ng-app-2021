import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SpreadIntoArrayPipe } from '@core/pipes/spread-into-array/spread-into-array.pipe'
import { CeilingPipe } from './ceiling/ceiling.pipe'
import { SafeUrlPipe } from './safe-url/safe-url.pipe'

@NgModule({
    declarations: [SafeUrlPipe, SpreadIntoArrayPipe, CeilingPipe],
    imports: [CommonModule],
    exports: [SafeUrlPipe, SpreadIntoArrayPipe, CeilingPipe],
    providers: [],
})
export class PipesModule {}
