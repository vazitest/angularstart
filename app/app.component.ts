import { Component } from '@angular/core';

@Component({
    selector: "my-app",
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/dashboard">仪表盘</a>
        <a routerLink="/heroes">大神列席</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: ["app/app.component.css"]
})
export class AppComponent {
    title = '超级大神之路'
}