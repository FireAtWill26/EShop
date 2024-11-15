import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:"order", loadComponent: () => import('./order/orders/orders.component').then(m => m.OrdersComponent)},
    {path:"admin", loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
    {path:"user", loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
    {path:"account", loadChildren: () => import('./account/account.module').then(m => m.AccountModule)},
    {path:"category", loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)},
    {path:"product", loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
    {path:"", redirectTo:"order", pathMatch:"full"},
    {path:"**", component:PageNotFoundComponent}
];
