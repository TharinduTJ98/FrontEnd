import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http: HttpClient) { }

  getStudentList(): Observable<any>{
    return this._http.get('https://localhost:7033/api/Student')
  }

  addStudent(data: any): Observable<any>{
    return this._http.post('https://localhost:7033/api/Student', data)
  }
}
