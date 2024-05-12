import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  stuForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _stuService: StudentService){
    this.stuForm = this._formBuilder.group({
      firstName: '',
      lastName: '',
      age: '',
      nationality: '',
    })
  }
  onFormSubmit(){
    if(this.stuForm.valid){
      console.log(this.stuForm.value)
      this._stuService.addStudent(this.stuForm.value).subscribe({
        next: (val:any) =>{
          alert("Student Added Successfully")
        },
        error: (err:any) =>{
          console.log(err)
        }
      })
    }
  }
}
