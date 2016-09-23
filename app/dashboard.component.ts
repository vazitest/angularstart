import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: "my-dashboard",
    templateUrl: "app/dashboard.component.html",
    //template: '<h3>我的仪表盘</h3>'
})
export class DashboardComponent implements OnInit{
    heroes: Hero[] = [];

    constructor(private heroService:HeroService) {}

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }

    gotoDetail(hero: Hero): void {

    }
}