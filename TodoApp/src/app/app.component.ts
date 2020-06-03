import { Component } from '@angular/core';
import { Todo } from "./Todo";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoValue:string; // todovalue of type string
  todolist: Todo[]; // array of type todo imported from todo.ts

  ngOnInit(){ //same like document.ready function in javascript
    this.todolist = [];
    this.todoValue = "";
  }

  addItem(){
    if (this.todoValue !== "") {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };

      this.todolist.push(newItem);
    }

    this.todoValue = "";
  }

  deleteItem(id:number){
    this.todolist = this.todolist.filter(item => item.id !== id);
  }

}
