/**
 * Created by JaN on 2017.01.22..
 */
import { Component, Output, EventEmitter } from '@angular/core';

@Component ({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})

export class TodoFormComponent {
    title: string ="";
    @Output() add = new EventEmitter();

    onSubmit(){
        this.add.emit(this.title);

    }
}