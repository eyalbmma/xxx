import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'hani-game',
  providers : [GameService],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private gs : GameService) { }

  ngOnInit() 
   {
     var level = prompt("Enter you level");

      if (level != null) 
      {
        this.gs.level= +level;
      }
    }

}
