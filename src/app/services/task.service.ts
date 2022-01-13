import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    // Getting tasks from the mock-tasks.ts
    // const tasks = of(TASKS);
    // return tasks;

    // Brings the tasks from the real back-end
    return this.http.get<Task[]>(this.apiUrl);
  }
}
