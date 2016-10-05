import { Component } from '@angular/core';

@Component({
    selector: 'loop-back',
    template : `
        <input #box (keyup)="0">    
        <p>{{box.value}}</p>
        ` //这句绑定到语句0，因为要使用#box是需要绑定一个语句，最小语句就是0啦
})
export class LoopbackComponent {

}