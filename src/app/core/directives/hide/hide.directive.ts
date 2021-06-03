import { Directive, ElementRef, Input, Renderer2 } from '@angular/core'

@Directive({
    selector: '[appHide]',
})
export class HideDirective {
    @Input() set appHide(value: boolean) {
        value
            ? this.renderer2.setStyle(this.elementRef.nativeElement, 'visibility', 'hidden')
            : this.renderer2.removeStyle(this.elementRef.nativeElement, 'visibility')
    }

    constructor(protected elementRef: ElementRef, protected renderer2: Renderer2) {}
}
