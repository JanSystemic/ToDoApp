/**
 * Created by JaN on 2017.01.22..
 */
export class Todo {
    //   title:string;
    //   completed:boolean;
//    false - значение по умолчанию
// в теле конструктора необходимо свойство инициализировать
//   constructor(title:string, completed: boolean = false){
    //      this.title = title;
    //     this.completed=completed;
    // } ниже сократим с помощью public для этого свойство класса необходимо удалить

    constructor(public title:string,
                public completed: boolean = false){

    }
}