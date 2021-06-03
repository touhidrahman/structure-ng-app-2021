import { Product } from '@features/products/interfaces/product'
import { SizeLetter } from '@features/sizes/enums/size-letter'

export interface Stock {
    id: string
    color: string
    discountPercent?: number
    onSale?: boolean
    price: number
    qty?: number
    product: Product
    saleUntil?: Date
    sizeLetter: SizeLetter
    store: 'DE' | 'BD'
}

export interface StockDto {
    color: string
    discountPercent?: number
    onSale?: boolean
    price: number
    product: string
    saleUntil?: Date
    sizeLetter: SizeLetter
    store: 'DE' | 'BD'
}
