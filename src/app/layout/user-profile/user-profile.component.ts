import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, EmailValidator } from '@angular/forms';
//import { userInfo } from 'os';
import { UserService } from 'src/app/core/user.service';
import { emailValidator } from 'src/app/shared/validators/email.validator';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  form: FormGroup
  propEmail: FormControl
  propUsername: FormControl
  propName: FormControl
  user: any = {}
  submitted: boolean = false

  


  constructor(private router:ActivatedRoute, private builder:FormBuilder, private userModel: UserService) { }
  
//clone = Object.assign(user, data)  permet de faire une fusion de deux object
  ngOnInit() {
    this.router.params.subscribe((paramsUrl:any) => {
        const id = paramsUrl.id
        this.userModel.get(id).subscribe((user:any) =>{
          this.user = user
          //this.propEmail.setValue(this.user.email)
          this.form.patchValue(this.user)
        })
    })
    //this.propPassword = new FormControl()
     //this.propName = new FormControl()
    //this.propUsername = new FormControl()
    this.propEmail = new FormControl('', [
      emailValidator
    ],[
      this.userModel.checkEmail.bind(this.userModel)
     /* (input: FormControl) => {
        return this.userModel.checkEmail(input)
      }
      */
    ])
   /*
    this.propEmail.valueChanges.subscribe((str: string) =>{
      console.log(str);
    })
*/
this.propEmail.valueChanges.pipe(
  debounceTime(1000),
  distinctUntilChanged()

).subscribe((str: string) => {

})

    this.form = this.builder.group({
        email: this.propEmail,
        name: '',
        username: ''
      })


  }
  edit(){
//const data = Object.assign(this.user, this.form.value)
//console.log(data)

    this.userModel.update(this.user.id, this.form.value).subscribe((userModified: any) => {
      this.submitted = false
      console.log('ok')
      //this.user = Object.assign(this.user, userModified)
      this.user = userModified 
    })

  }

}
