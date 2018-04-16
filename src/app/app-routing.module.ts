import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
//import { ProfileComponent } from '../app/user/profile/profile.component';
import { UserComponent } from '../app/user/user.component';
import { RoutingConsts } from './shared';
const routes: Routes = [
    { path: RoutingConsts.user, component: UserComponent },
    { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}