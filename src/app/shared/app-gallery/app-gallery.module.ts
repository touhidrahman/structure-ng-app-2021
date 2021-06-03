import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { GalleryComponent } from './components/gallery/gallery.component'

@NgModule({
    declarations: [GalleryComponent],
    imports: [CommonModule],
    exports: [GalleryComponent],
})
export class AppGalleryModule {}
