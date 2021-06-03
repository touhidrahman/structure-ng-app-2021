import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CarouselHeroComponent } from './components/carousel-hero/carousel-hero.component'

@NgModule({
    declarations: [CarouselHeroComponent],
    imports: [CommonModule],
    exports: [CarouselHeroComponent],
})
export class AppCarouselModule {}
