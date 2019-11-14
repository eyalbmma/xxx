import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule , MatInputModule } from '@angular/material';


import { TaskModelComponent } from './todo-list/components/task-model.component';
import { TodoListComponent } from './todo-list/components/todo-list.component';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TodoListComponent,
    TaskModelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
