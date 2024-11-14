import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdmintestComponent } from "./admintest/admintest.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes =
[
    {path:"admintest", component:AdmintestComponent},
    {path:"login", component:LoginComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {}