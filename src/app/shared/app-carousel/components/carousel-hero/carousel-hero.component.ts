import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
    selector: 'app-carousel-hero',
    templateUrl: './carousel-hero.component.html',
    styleUrls: ['./carousel-hero.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselHeroComponent {}
