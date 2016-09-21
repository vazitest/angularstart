import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}


@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1><h2>{{hero}}详情</h2>'
})
export class AppComponent {
  title = '英雄之路';
  hero = '风之神';
 }