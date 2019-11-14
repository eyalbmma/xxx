import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'hani-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  get board(){ return this.gs.board; }
  get level(){return this.gs.level; }
  get boardSize() { return this.board.sizeX * this.board.sizeY; }
  get cells() { return this.board.cells; }

  constructor(public gs : GameService) { }

  fillbomb()
  {
    for (let j = 0; j < this.level; j++)
    {
      let bombIndex;

      do {
        bombIndex = Math.floor(Math.random() * this.boardSize);
      }
      while(typeof bombIndex != 'undefined' && this.cells[bombIndex].status != 'empty'  );

      this.cells[bombIndex].status = 'bom';
    }
  }

  ngOnInit() {

     this.fillbomb()

     
    

  }
}
