import { FormArray, FormControl } from '@angular/forms';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'hani-user-info',
  templateUrl: './user-info.component.html',
  styleUrls  : ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  get cardsFa(){
    return this.vm.user.get('cards') as FormArray;
  }

  addCard(){
    this.cardsFa.push( new FormControl('xxxxx') );
  }

  constructor( public vm : UsersService) { }

  ngOnInit() {
  }

}
