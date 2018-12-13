import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
//import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common' 
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [ReactiveFormsModule, CommonModule],
   // imports: [FormsModule, CommonModule],
    declarations: [LoginComponent],
   
})

export class LoginModule{

}