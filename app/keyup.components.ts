import { Component } from '@angular/core';

@Component({
    selector: "key-up1",
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

    onKey(event: KeyboardEvent) {
        this.values +=  (<HTMLInputElement>event.target).value + ' | ';
    }

}

@Component({
    selector: "key-up2",
    template: `
        <input #box (keyup) = "onKey(box.value)">
        <p>{{values}}</p>
    `
    
})
export /**
 * KeyUpComponent_v2
 */
class KeyUpComponent_v2 {
    values = "";

    onKey(value: string) {
        this.values +=  value + ' | ';
    }

}

@Component({
    selector: "key-up3",
    template: `
        <input #box (keyup.enter) = "values=box.value">
        <p>{{values}}</p>
    `
    
})
export /**
 * KeyUpComponent_v3
 */
class KeyUpComponent_v3 {
    values = "";


}

@Component({
    selector: "key-up4",
    template: `
        <input #box 
        (keyup.enter) = "values=box.value"
        (blur) = "values=box.value">
        <p>{{values}}</p>
    `
    
})
export /**
 * KeyUpComponent_v3
 */
class KeyUpComponent_v4 {
    values = "";


}