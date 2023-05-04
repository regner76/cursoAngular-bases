import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { componentModule } from './counter/counter.module';
import { heroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    componentModule,
    heroesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
