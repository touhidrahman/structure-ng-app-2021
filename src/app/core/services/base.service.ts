import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Params } from '@angular/router'
import { environment } from '@environment/environment'

export class BaseService<T, DtoT> {
    protected endpoint: string

    constructor(protected http: HttpClient, resourcePath: string) {
        this.endpoint = environment.apiURL + resourcePath
    }

    findById(id: string): Observable<T> {
        return this.http.get<T>(`${this.endpoint}/${id}`)
    }

    find(params: Params): Observable<T[]> {
        return this.http.get<T[]>(this.endpoint, { params })
    }

    search(term: string): Observable<T[]> {
        return this.http.get<T[]>(this.endpoint, { params: { _q: term } })
    }

    count(params: Params = {}): Observable<number> {
        return this.http.get<number>(`${this.endpoint}/count`, { params })
    }

    create(dto: DtoT | Partial<T>): Observable<T> {
        return this.http.post<T>(this.endpoint, dto)
    }

    update(id: string, body: DtoT | Partial<T>): Observable<T> {
        return this.http.put<T>(`${this.endpoint}/${id}`, body)
    }

    delete(id: string): Observable<T> {
        return this.http.delete<T>(`${this.endpoint}/${id}`)
    }
}
