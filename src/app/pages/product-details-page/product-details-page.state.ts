import { Product } from '@features/products/interfaces/product'
import { Stock } from '@features/stocks/interfaces/stock'

export interface ProductDetailsPageState {
    loading: boolean
    product: Product | null
    similarProducts: Product[]
    id: string
    selectedStock: Stock | null
    availableSizes: string[]
}
