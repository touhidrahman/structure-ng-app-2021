import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-header-megamenu',
    templateUrl: './header-megamenu.component.html',
    styleUrls: ['./header-megamenu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMegamenuComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
