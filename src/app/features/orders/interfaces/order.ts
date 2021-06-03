import { Address } from '@core/interfaces/address'
import { Product } from '@features/products/interfaces/product'
import { Shipping } from '@features/shippings/interfaces/shipping'
import { OrderStatus } from '../enums/order-status'

export interface Order {
    id: string
    customerName: string
    customerEmail: string
    customerPhone: string
    shippingAddress: Address
    billingAddress: Address
    paymentMethod: string
    appliedVoucher: Voucher
    price: number
    vat: number
    discount: number
    shippingCharge: number
    products: Product[]
    currentStatus: OrderStatus
    orderedAt: Date
    createdAt: Date
    updatedAt: Date
    // statusHistory
    shipping: Shipping
}

export interface Voucher {}
