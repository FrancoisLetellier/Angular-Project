import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { UsersModule } from 'src/app/user/users.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  
  imports: [
    CommonModule,
    UsersModule,
    ReactiveFormsModule

  ],
  declarations: [UserProfileComponent],
})
export class UserProfileModule { }
