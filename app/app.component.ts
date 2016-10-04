import { Component } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html'

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