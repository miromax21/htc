import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ProfileService } from './services/profile.service';
import { AuthorizationService } from './services/authorization.service';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private _router: Router,
        private _accountService: ProfileService,
        private _authorizationService: AuthorizationService
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.IsAccessed();
    }

    private IsAccessed(): boolean {
        if (!this._accountService.IsAuthenticated())
            this._authorizationService.FakeSignIn();
        return this._accountService.IsAuthenticated();
    }
}
