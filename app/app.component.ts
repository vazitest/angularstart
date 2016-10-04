import { Component } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>我最爱的英雄是:{{myHero.name}}</h2>
    <p>大神:</p>
    <ul>
      <li *ngFor="let hero of heroes">
       {{hero.name}}
       </li>
    </ul>
    <p *ngIf="heroes.length > 3">有很多大神呢！</p>
    `
})
export class AppComponent {
    title = '英雄之路';
    heroes = [ new Hero(1, '华仔大神') ,
              new Hero(2, '苏神'),
              new Hero(23, '精神'),
              new Hero(13 ,'天神')
              ];
    myHero = this.heroes[0];
 }