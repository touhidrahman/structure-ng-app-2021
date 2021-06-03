export interface ProductType extends ProductTypeDto {
    id: string
}

export interface ProductTypeDto {
    group: 'Men' | 'Women' | 'Children'
    category: string
    subcategory: string
    unisex: boolean
}
