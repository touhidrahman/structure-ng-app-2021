import { Params } from '@angular/router'
import { Pagination } from '../interfaces/pagination'
import { defaultPaginationValues } from '../values/pagination.values'

/**
 * Pass random queryParams to this function and it will return correct pagination values from the query params.
 * If any value is not available, then it will use default pagination values
 * @param params Params
 */
export function getPagination(params: Params, defaultValues: Pagination = defaultPaginationValues): Pagination {
    return {
        _start: +params?._start ?? defaultValues._start,
        _limit: +params?._limit ?? defaultValues._limit,
        _sort: params?._sort ?? defaultValues._sort,
    }
}
