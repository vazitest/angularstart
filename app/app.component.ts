import { Component } from '@angular/core';

@Component({
    selector: "my-app",
    template: `
    <h1>{{title}}</h1>
    <a routerLink="/heroes">大神列席</a>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
    title = '超级大神之路'
}