import { Params } from '@angular/router'

export interface BreadcrumbConfig {
    routerLink: string[]
    queryParams: Params
    name: string
}
