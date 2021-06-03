export interface OrderHistory {
    id: string
    currentStatus: string
    created: Date
    transmitted: Date
    dispatched: Date
    shipped: Date
    delivered: Date
    returnInitiated: Date
    returnReceived: Date
    paymentSettled: Date
    completed: Date
    closed: Date
}
