import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './users/employee-create/employee-create.component';
import { EmployeeListComponent } from './users/employee-list/employee-list.component';
import { EmployeeEditComponent } from './users/employee-edit/employee-edit.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'edit-employee/:id', component: EmployeeCreateComponent },
  { path: 'employees-list', component: EmployeeListComponent }  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }