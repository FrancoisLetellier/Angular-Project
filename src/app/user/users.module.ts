import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UserCardComponent } from './user-card/user-card.component'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module'
import { FormsModule } from '@angular/forms'
import { ExtensionPipe } from '../shared/pipes/extension.pipe';
import { layoutRouter } from '../layout/layout.router';

@NgModule({
    imports: [ CommonModule, SharedModule, FormsModule, layoutRouter],
    declarations: [UsersComponent, UserCardComponent, ExtensionPipe],
    exports: [UsersComponent]
})

export class UsersModule{

}