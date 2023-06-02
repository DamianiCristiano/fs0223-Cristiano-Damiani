import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './Pages/todo/todo.component';
import { CompletatiComponent } from './Pages/completati/completati.component';

const routes: Routes = [
{
  path: '',
  component: TodoComponent
},
{
  path: 'completati',
  component: CompletatiComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
