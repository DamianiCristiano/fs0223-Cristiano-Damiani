import { Injectable } from '@angular/core';
import { Todos } from './todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl:string = 'http://localhost:3000/todos';

  constructor() { }

  getTodos():Promise<Todos[]>{
    return fetch(this.apiUrl).then(response => response.json());

  }

  addTodos(todo:Todos){
    return fetch(this.apiUrl,{
      method:'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    }).then(response => response.json());
  }

  updateTodo(todo:Todos){
    todo.completed =!todo.completed;
      fetch(this.apiUrl+'/'+todo.id,{
      method:'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    }).then(response => response.json());
}

deleteTodo(todo:Todos){
  return fetch(this.apiUrl+'/'+todo.id,{
    method:'DELETE',
  }).then(response => response.json());
}

}
