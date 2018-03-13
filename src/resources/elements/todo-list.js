import {bindable} from 'aurelia-framework';

export class TodoList {
  @bindable todos;

  delete(todo) {
  	this.todos.splice(this.todos.indexOf(todo), 1);
  }

  valueChanged(newValue, oldValue) {

  }
}

