import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="layout">
    <div class="container">
      <a href="/user">user</a>
      <a href="/friends">friends</a>
      <router-outlet></router-outlet>
    </div>
  </div>
             `
})
export class AppComponent {
}
