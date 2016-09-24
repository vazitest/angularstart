import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

//这个是从system.config.js里面导入的
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes'; //Url to web api

    constructor(private http: Http) {}

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
                .toPromise()
                .then(response => response.json().data as Hero[])
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('调用数据服务时发生错误', error);
        return Promise.reject(error.message || error);
    }


    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
                    .then(heroes => heroes.find(hero => hero.id == id));
    }
}