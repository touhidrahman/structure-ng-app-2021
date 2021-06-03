import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-footer-default',
    templateUrl: './footer-default.component.html',
    styleUrls: ['./footer-default.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterDefaultComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
