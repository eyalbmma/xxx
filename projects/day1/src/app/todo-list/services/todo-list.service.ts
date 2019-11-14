import { TaskModel } from '../models/task.model';

export class TodoListService{
    
    tasks : TaskModel[] = [
        { id : -1 , done:true  , desc : 'aaaa'},
        { id : -2 , done:false , desc : 'aaaa'},
      ];

    tasksMap = new Map<number,TaskModel>();  
    
      get totalIsDone() : number{
        return this.tasks.filter( t => t.done ).length;
      }
    
      addTask(desc:string){
        let task = new TaskModel(desc);
        this.tasks.push(task);

        // option 2 with map
        this.tasksMap.set( task.id , task );
      }
    
      removeTask(id:number){
        let index = this.tasks.findIndex( t => t.id === id );
        this.tasks.splice(index,1);

         // option 2 with map
         this.tasksMap.delete(id);
      }

      clear(){
        this.tasks.length = 0;

        // option 2 with map
        this.tasksMap.clear();
      }


}