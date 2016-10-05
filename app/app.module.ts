import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent_v1 } from './keyup.components';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    ClickMeComponent,
    KeyUpComponent_v1
    
     ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }