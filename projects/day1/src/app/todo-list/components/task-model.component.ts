import { Component, OnInit, Input } from '@angular/core';
import { TaskModel } from '../models/task.model';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'task-model',
  template: `
  <div class="task-layout" >
    <input type="checkbox" 
        [checked] = "task.done"
        (change)  = "task.done = $event.target.checked">
    <span>{{task.id}} - {{task.desc}}</span>
    <button (click)="vm.removeTask(task.id)">x</button>
  </div>
  `,
  styles: []
})
export class TaskModelComponent implements OnInit {

  @Input('source') task : TaskModel;

  constructor( public vm : TodoListService ) { }

  ngOnInit() {
  }

}
