import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './Containers';

const USER_DETAILS_ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: UserDetailsComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forChild(USER_DETAILS_ROUTES)],
    exports: [RouterModule]
})
export class UserDetailsRoutingModule { }
