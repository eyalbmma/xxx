import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface MaxError {
  max   : number;
  value : number;
  msg   : string;
}


@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() value = 100;
  @Input() max   = 10;

  @Output() onMax = new EventEmitter<MaxError>();

  decrease(){ this.value--; }
  increase(){ 
    this.value++; 
    if( this.value > this.max){
      this.onMax.emit({
        max   : this.max,
        value : this.value,
        msg   : `Error the value, ${this.value} is to big, ${this.max}` 
      });
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
