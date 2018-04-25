import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { UserComponent } from '../app/user/profile/user.component';
import { FriendsComponent } from '../app/user/friends/friends.component';
import { AuthGuard, RoutingConsts } from './shared';
const routes: Routes = [
    { path: '', redirectTo: RoutingConsts.user, pathMatch: 'full' },
    { path: RoutingConsts.friends, component: FriendsComponent, canActivate: [AuthGuard] },
    { path: RoutingConsts.user, component: UserComponent, canActivate: [AuthGuard] },
    { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        paramsInheritanceStrategy: 'always',
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}