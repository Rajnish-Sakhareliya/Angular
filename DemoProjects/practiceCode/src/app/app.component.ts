import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';

  name = '';
  show = false;
  color = "yellow";
  nameArray = ["rajnish","sakhareliya"];

  todoTitle = "My Todo List";
  twoWay :string = ""

  getName(name : string){
    alert(name)
  }

  getValue(value : string){
    console.warn(`value : ${value}`)
    this.name = value
  }

  changeShow(){
    this.show = !this.show
  }

  getData(data : NgForm){
    console.log(data)
  }

  changeTodoTitle() { 
    this.todoTitle = this.todoTitle === "My Todo List" ? "My Todo List Changed" :"My Todo List" ;
  }

  setTitleFromChild(title : string){
    this.todoTitle = title
  }
}
