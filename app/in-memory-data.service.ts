import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: 11, name: '好好先生' },
            { id: 12, name: '玉皇大帝' },
            { id: 13, name: '皇母娘娘' },
            { id: 14, name: '齐天大圣' },
            { id: 15, name: '托塔天王' },
            { id: 16, name: '如来佛祖' },
            { id: 17, name: '天鹏元帅Mr.Zhu' },
            { id: 18, name: '菩提道长' },
            { id: 19, name: '嫦娥姐姐' },
            { id: 20, name: 'Vazi大神' }
        ];
        return {heroes}
    }
}