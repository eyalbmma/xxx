import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

      

      <todo-list></todo-list>

      
      <!--counter 
        [value] = "1" 
        [step]  = "3"
        [min]   = "2"
        [max]   = "10" 
        (onMax) = "title = $event.msg"
        (onMin) = "title = $event.msg">
      </counter -->


    
    
  `,
  styles: []
})
export class AppComponent {
  title = 'day1';
  
}
