import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BaseService } from '@core/services/base.service'
import { User } from '@features/users/interfaces/user'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class UserService extends BaseService<User, unknown> {
    constructor(protected http: HttpClient) {
        super(http, '/users')
    }

    getMe(): Observable<User> {
        return this.http.get<User>(this.endpoint + '/me')
    }
}
