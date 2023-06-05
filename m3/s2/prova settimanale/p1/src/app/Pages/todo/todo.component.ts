import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { Todos } from 'src/app/todos';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  todos: Todos[] = [];
  loading: boolean = true;

  constructor(private todoSvc: TodosService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  filterArrayPost: Todos[] = [];

  getTodos() {
    this.todoSvc.getTodos().then((todoRes) => {
      this.todos = todoRes;
      this.loading = false;
      this.filterArrayPost = todoRes.filter((res) => res.completed === false);
    });
  }

  todo: Todos = new Todos('', false);

  addTodos() {
    this.todoSvc.addTodos(this.todo).then((todoRes) => {
      console.log(todoRes);
      this.getTodos();
    });
  }

  update(todo: Todos) {
    this.todoSvc.updateTodo(todo);
    setTimeout(() => {this.getTodos()
    }, 100);
  }

  deleteTodo(todo: Todos) {
    this.todoSvc.deleteTodo(todo);
    setTimeout(() => {this.getTodos();
    }, 100);
  }
}
