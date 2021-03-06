import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  /*encapsulation: ViewEncapsulation.None*/
})
export class TodoItemComponent implements OnInit {

  @Input()
  private todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }


  private removeTodo(): void {
    this.todoService.removeTodo(this.todo.id);
  }

  private editTodo(): void {
    this.todo.edit = !this.todo.edit;
  }

  private changeTodo(newText: string): void {
    this.todo.edit = false;
    if (newText) {
      this.todoService.changeTodo(this.todo.id, newText);
    }
  }

  private doToDo(): void {
    this.todoService.changeDone(this.todo.id, !this.todo.done);
  }
}
