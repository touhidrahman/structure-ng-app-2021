import { Pagination } from '../interfaces/pagination'

export const defaultPaginationValues: Pagination = {
    _start: 0,
    _limit: 10,
    _sort: 'createdAt:desc',
}
