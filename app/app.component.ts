import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: '好好先生' },
  { id: 12, name: '玉皇大帝' },
  { id: 13, name: '皇母娘娘' },
  { id: 14, name: '齐天大圣' },
  { id: 15, name: '托塔天王' },
  { id: 16, name: '如来佛祖' },
  { id: 17, name: '天鹏元帅' },
  { id: 18, name: '菩提道长' },
  { id: 19, name: '嫦娥姐姐' },
  { id: 20, name: '华仔大神' }
];

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>我的大神</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
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
  heroes = HEROES;
  hero: Hero = {
    id: 1,
    name: '风之神'
  };
 }