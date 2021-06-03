import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { AccordionPanel } from '@shared/app-accordion/interfaces/accordion-panel'

@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
    @Input() panels: AccordionPanel[] = []

    activePanel = 0

    selectActivePanel(index: number): void {
        this.activePanel = index
    }
}
