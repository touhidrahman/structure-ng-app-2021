import { Order } from '@features/orders/interfaces/order'

export interface Voucher {
    id: string
    code: string
    type: 'FixedAmount' | 'Percentage'
    value: number
    validTill: Date
    exclusiveFor?: string
    usedOnDate: Date
    usedOnOrder: Order
}
