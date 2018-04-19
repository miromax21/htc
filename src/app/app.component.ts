import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <div class="layout">

    <div class="container">
      <div class="tabs">
        <a routerLink="/user" class="tab" routerLinkActive="active-link">Профиль</a>
        <a routerLink="/friends" class="tab"  routerLinkActive="active-link">Друзья прользователя</a>
      </div>
      <router-outlet></router-outlet>
    </div>
  </div>
             `
})
export class AppComponent {
}
