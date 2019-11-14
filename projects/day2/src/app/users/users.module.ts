import { UserInfoComponent } from './components/user-info/user-info.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule,MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';


@NgModule({
    declarations : [
        UserInfoComponent
    ],
    exports      : [
        UserInfoComponent
    ],
    imports      : [
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule
    ]
})
export class UsersModule {

}