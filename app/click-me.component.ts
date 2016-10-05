import { Component } from '@angular/core';

@Component({
    selector: 'click-me',
    template:
    `
    <button (click)="onClickMe()">点我呀</button>
    {{clickMessage}} 
    `
})
export class ClickMeComponent {
    clickMessage = '未点击之前';

    onClickMe() {
        this.clickMessage = "你是我的大神呀！";
    }
}
