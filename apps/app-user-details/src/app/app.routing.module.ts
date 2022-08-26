import { RouterModule, Routes } from '@angular/router';

const APP_USER_DETAILS_ROUTES: Routes = [
    {
        path: 'user-details',
        loadChildren: () => import('@user-details/user-details').then(m => m.UserDetailsModule)
    }
];

export const userDetailsRoutes = RouterModule.forRoot(APP_USER_DETAILS_ROUTES, {
    useHash: false
});
