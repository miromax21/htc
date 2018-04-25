import { Component } from '@angular/core';
import { RoutingConsts } from './shared/enums/routing-consts.enum';

@Component({
  selector: 'app-root',
  template: `
  
  <div class="layout">
    <div class="container">
      <div class="tabs">
        <a [routerLink]="[routingConsts.user]" class="tab" routerLinkActive="active-link">Профиль</a>
        <a [routerLink]="[routingConsts.friends]" class="tab"  routerLinkActive="active-link">Друзья прользователя</a>
      </div>
      <router-outlet></router-outlet>
    </div>
  </div>
             `
})
export class AppComponent {
  routingConsts: any = RoutingConsts;
}
