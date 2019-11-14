import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Injectable({ providedIn : "root" })
export class UsersService {

    user = new FormGroup({
        name  : new FormControl( 'eyal'          , [ Validators.required , this.foo(4) ]),
        email : new FormControl( 'eyal@gold.com' , [ Validators.email    ] ),
        age   : new FormControl( 48              , [ Validators.max(120), Validators.min(1) ]),
        gender: new FormControl('1'),
        date  : new FormControl(''),
        cards : new FormArray([
            new FormControl('4580-9601-0101-0101')
        ])
    },[],this.asyncDemo);


    constructor(){
        this.user.valueChanges.subscribe( value => {
            console.dir(value);
        } )
    }

    foo( n: number){
        return (fc:FormControl) => {
            return fc.value.length > n ? {
                "eyal" : "eyal error !!!! msg"
            } : null;
        }
    }
    asyncDemo(fg:FormGroup){
        return new Promise( resolve => {
            setTimeout(resolve,3000,null);
        });
    }
    
    
}