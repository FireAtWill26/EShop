import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddCategoryComponent } from "./add-category/add-category.component";

const routes: Routes =[{
    path: "add", component: AddCategoryComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class CategoryRoutingModule {}