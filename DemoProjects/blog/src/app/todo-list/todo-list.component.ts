import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @ Input() todoTitle : string = ""; 
  @Output() setTitleFromChildEvent = new EventEmitter<string>()

  todos : {id : number , name : string}[] = [];

  addIteam(iteam : string){
    this.todos.push({id : this.todos.length , name : iteam})
  }

  removeTodo(deleteId : number){
    this.todos = this.todos.filter(({id}) => id !== deleteId)
  }

}
