import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'hani-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {
  get board(){ return this.gs.board; }

  get score() { return this.gs.score; }
  set score(value:number) { this.gs.score = value; }
  
  constructor(public gs : GameService) { }
  
  MoveCursoronBoard(direction:string)
  {
    switch(direction)
    {
        case "up":
            this.board.up();
          break;
        case "right":
            this.board.right();
          break;
        case "left":
            this.board.left();
          break;
        case "down":
            this.board.down();
          break;
    }

    this.score++;
  }

  ngOnInit() {
  }

}
