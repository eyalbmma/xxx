let count = 0;

export class TaskModel{
    id:number;


    constructor(
        public desc : string, 
        public done : boolean = false
    ){
        this.id = count++;
    }

}