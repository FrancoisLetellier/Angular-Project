import { Routes, RouterModule} from '@angular/router';
import { LayoutComponent } from './layout.component';
import { UsersComponent } from '../user/users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from '../core/auth.guard';


const routes:Routes =[ {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
        {
            path: '',
            component: UsersComponent
        },
        {
            path: 'user/:id',
            component: UserProfileComponent
        }
    ]
}
]

export const layoutRouter = RouterModule.forChild(routes)