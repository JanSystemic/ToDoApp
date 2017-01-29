import {Component}from "@angular/core";

import { Todo } from "./shared/todo";
import { todos } from './shared/data';



@Component({
    moduleId: module.id,
    selector: "app",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]

})

export class AppComponent {
    title: string = "Angular 2Do";
    bilde = "img/angular.svg";
    todos: Todo[] = todos;
    create(title:string){
        const todo = new Todo(title);
        this.todos.push(todo);
    }

    // create(event:Event, title:string){
    //     // let todo: Todo = {
    //     //     title:title,
    //     //     completed: false
    //     //
    //     // };
    //     event.preventDefault(); // to stop sending data
    //     let todo: Todo = new Todo(title); // comleted not necessary because by default false
    //
    //     this.todos.push(todo);
    //
    // }
}