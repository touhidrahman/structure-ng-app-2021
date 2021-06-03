import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { AuthService } from '@core/services/auth.service'

@Injectable({
    providedIn: 'root',
})
export class CanActivateRouteGuard implements CanActivate {
    constructor(private authService: AuthService) {}

    canActivate(): Observable<boolean> {
        return this.authService.isLoggedIn$()
    }
}
