import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.module';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos!: Todo[];
  showValidationErrors!: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  onFormSubmit(form: NgForm){
    console.log('Form Sub');
    console.log(form);

    if (form.invalid) {
      return this.showValidationErrors = true;
      } else {
      return this.dataService.addTodo(new Todo(form.value.text));
    }
  }

}
