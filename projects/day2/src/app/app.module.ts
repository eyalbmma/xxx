import { UsersModule } from './users/users.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GameModule } from './game/game.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleModalModule } from 'ngx-simple-modal';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    GameModule,
    UsersModule,
    BrowserAnimationsModule,
    SimpleModalModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
