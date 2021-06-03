import { SizeLetter } from '../enums/size-letter'

export interface Size {
    sizeLetter: SizeLetter
    sizeType: 'Regular' | 'Slim'
}
