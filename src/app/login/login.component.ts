import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { letterValidator } from '../shared/validators/letter.validator';
import { AuthService } from '../core/auth.service';
//import { NgForm } from '@angular/forms'

@Component({
    templateUrl: `login.component.html`,
    selector: 'app-login',
    styles : [
        `.red{
            color: red;
        }
        .green{
            color: green;
        }`
        
    ]
})


export class LoginComponent implements OnInit{
  myform: FormGroup
  propEmail: FormControl
  propPassword: FormControl
  submitted: boolean = false

  constructor (private builder:FormBuilder,
            private auth:AuthService){}

  ngOnInit(){
    this.propEmail = new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        letterValidator('b')
    ])
   // this.propEmail.setValue(' vvdvdvd')


    this.propPassword = new FormControl()
    this.myform = this.builder.group({
        email: this.propEmail,
        password: this.propPassword
    })
  }
    login(){
        this.submitted = true
        this.auth.login(this.myform.value).then(() => {
            console.log('connecté !')
        })
    }
  
    /* 
    propEmail: string
 
    login(form: NgForm){
        console.log(form)

    }
    */
}