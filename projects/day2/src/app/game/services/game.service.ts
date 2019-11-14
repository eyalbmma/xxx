import { BoardModel } from '../models/board.model';

export class GameService{
    board : BoardModel = new BoardModel();
    level : number = 5;
    score : number = 0;
}