import { Component } from '@angular/core';


@Component({
  moduleId: module.id, //缺少了此ID会导致app.component.html找不到
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {

}