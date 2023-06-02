import { Todo } from "./todo";


export class Todos implements Todo{
  id?: number | undefined;
  title: string;
  completed: boolean;

  constructor(title: string, completed: boolean, id?: number | undefined){ {
      this.id = id;
      this.title = title;
      this.completed = completed;
    }
}
}
