import { Routes } from '@angular/router';
import { OrdersComponent } from './order/orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:"order", component:OrdersComponent},
    {path:"admin", loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
    {path:"user", loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
    {path:"login", component:LoginComponent},
    {path:"", redirectTo:"login", pathMatch:"full"},
    {path:"**", component:PageNotFoundComponent}
];
