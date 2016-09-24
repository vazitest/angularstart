import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

@Component({
    selector: 'hero-search',
    templateUrl: 'app/hero-search.component.html',
    styleUrls: ['app/hero-search.component.css'],
    providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>(); //Subject 是作为一个搜索事件的生产者

    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router
    ) {}

    search(term: string): void {
        this.searchTerms.next(term); //每次调用都Push一个事件到Observable的事件流当中
    }

    ngOnInit() : void {
        this.heroes = this.searchTerms  //这个是定义如何触发订阅的事件
            .debounceTime(300) //在事件触发时等上300毫秒，以便收集连续的输入,减少http调用
            .distinctUntilChanged() //确保只有在有变化时才触发
            .switchMap(term => //只保留最后一次成功的结果，抛弃以前在途中或者被取消的操作
                term ? this.heroSearchService.search(term)
                    : Observable.of<Hero[]>([])
            )
            .catch(error =>{
                console.log(error);
                return Observable.of<Hero[]>([]);
            })
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}