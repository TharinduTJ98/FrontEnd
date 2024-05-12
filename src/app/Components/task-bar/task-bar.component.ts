import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from '../add-student/add-student.component';

@Component({
  selector: 'app-task-bar',
  templateUrl: './task-bar.component.html',
  styleUrls: ['./task-bar.component.css']
})
export class TaskBarComponent {
  constructor(private _dialog: MatDialog){}

  openAddEditDialog(){
    this._dialog.open(AddStudentComponent)

  }
}
