import { Stock } from './stock'

export interface StockEvent {
    type: 'add' | 'remove'
    stock: Stock
    qty: number

    createdAt: Date
    updatedAt: Date
}

export interface StockEventDto {
    type: 'add' | 'remove'
    stock: string
    qty: number
}
