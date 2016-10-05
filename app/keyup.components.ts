import { Component } from '@angular/core';

@Component({
    template: `
        <input (keyup) = "onKey($event)">
        <p>{{values}}</p>
    `
})
export /**
 * KeyUpComponent_v1
 */
class KeyUpComponent_v1 {
    values = "";

    onKey(event: any) {
        this.values += event.target.value + ' | ';
    }

}