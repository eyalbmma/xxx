import { Cell, Position } from './cell.model';

export class BoardModel {
    sizeX = 10;
    sizeY = 10;
    pos: Position = { x: 5, y: 5 };
    cells: Cell[] = new Array(this.sizeX * this.sizeY);

    constructor(){
        this.fill();
        this.cells[this.index()].status = "visited";
    }

    up() {
        this.pos.y--;
        this.checkStatus(this.index());
       
    }

    down() {
        this.pos.y++;
        let index = this.index();
        this.checkStatus(index);
    }

    left() { 
        this.pos.x--;
        this.checkStatus(this.index());
    }

    right() { 
        this.pos.x++;
        this.checkStatus(this.index());
    }

    index(): number {
        return this.pos.x + (this.pos.y * this.sizeX);
    }

    gameOver(){
       
        document.querySelector("body").innerHTML="";
        if (window.confirm("Game over"))
        {
           
            window.location.reload();
        }
        else
        {
            window.location.reload();
        }
       
        
        
    }
    
    checkStatus(index:number){
        console.log(`i:${index}, pos: ${JSON.stringify(this.pos)}`);

        
        if (this.pos.x<0 || this.pos.x>=this.sizeX ||this.pos.y<0 || this.pos.x>=this.sizeY)
        {
            this.gameOver();
        }
        
        
        switch (this.cells[index].status) {
            case 'bom':
                this.gameOver();
                break;
            case 'visited':
                this.gameOver();
                break;
            case 'empty':
                this.cells[index].status = 'visited';
                break;
        }
    }

    fill(){
        for(let i = 0 ; i < this.cells.length ; i++){
            this.cells[i] = { status : 'empty' };
        }       
    }


}