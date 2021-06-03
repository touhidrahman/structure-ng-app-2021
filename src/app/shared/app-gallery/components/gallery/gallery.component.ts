import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
    @Input() imageUrls: string[] = []
}
