import { Category } from '@features/categories/interfaces/category'
import { Subcategory } from '@features/categories/interfaces/subcategory'
import { Stock } from '@features/stocks/interfaces/stock'
import { ProductGroup } from '../types/product-group'

export interface Product {
    id: string
    brand: string
    category: Category
    dateFirstAvailable: Date
    description: string
    group: ProductGroup
    stocks: Stock[]
    material: string
    newArrivalUntil: Date
    packageDimension: string
    packageWeight: number
    season: string
    subcategory: Subcategory
    slug: string
    title: string

    status: 'draft' | 'published'
    createdAt: Date
    updatedAt: Date
}
