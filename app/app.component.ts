import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}


@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}}详情</h2>
  <div><label>编号:</label>{{hero.id}}</div>
  <div>
    <label>大名:</label>
    <input [(ngModel)] ="hero.name" placeholder="大名">
  </div>
  `
})
export class AppComponent {
  title = '英雄之路';
  hero: Hero = {
    id: 1,
    name: '风之神'
  };
 }