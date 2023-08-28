import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/Todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {


  todos!: Todo[];
  inputTodo: string = ""



  constructor() { }
  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Content',
        completed: true
      },
      {
        content: 'Second Content',
        completed: false
      },
    ]
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed == !v.completed;
      return v;
    })
  }


  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) =>
      i != id);
  }

  addTodo() {
    if (this.inputTodo !== "") {
      this.todos.push({
        content: this.inputTodo,
        completed: false
      });
      this.inputTodo! = ""
    }
  }

}
