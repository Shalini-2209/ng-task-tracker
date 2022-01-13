import { Injectable } from '@angular/core';
import { Observable, of, retryWhen } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { TASKS } from '../mock-tasks';
import { Task } from '../Task';

const headerOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

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

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, headerOptions);
  }

  addTask(newTask: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, newTask, headerOptions);
  }
}
