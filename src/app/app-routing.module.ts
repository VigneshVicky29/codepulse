import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component'; // Import the missing CategoryListComponent module
import { AddCategoryComponent } from './features/category/add-category/add-category.component';

const routes: Routes = [
  {
    path: 'admin/categories',  // URL path
    component: CategoryListComponent  // Component class
  },
  {
    path: 'admin/categories/add',
    component: AddCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
