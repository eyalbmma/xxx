import { TodoListService } from './../services/todo-list.service';
import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../models/task.model';

@Component({
  selector: 'todo-list',
  providers : [TodoListService],
  template: `
   <div class="todo-list-layout">
      
      <div class="header" >
        <mat-form-field>
          <input matInput placeholder="task desc" #desc>
        </mat-form-field>
        <button  mat-raised-button 
            class="add-task" 
            color="primary" (click)="vm.addTask(desc.value)">Add Task</button>
      </div>

      <div class="task-list">

        <task-model *ngFor="let task of vm.tasks"
            [source]="task"
        ></task-model>
        

      </div>
   
      <div class="footer">
        <strong>Total: {{vm.totalIsDone}} / {{vm.tasks?.length}}</strong>
      </div>
   </div>
  `,
  styles: []
})
export class TodoListComponent implements OnInit {

  //vm = new TodoListService();


  constructor( public vm : TodoListService ) { }

  ngOnInit() {
  }

}
