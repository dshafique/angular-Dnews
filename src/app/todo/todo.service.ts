import { Injectable } from '@angular/core';

const TODOS = [
  { title: 'Set up List', isDone: true },
  { title: 'Style List', isDone: true },
  { title: 'Style app', isDone: false },
  { title: 'Incorporate news api', isDone: false },
  { title: 'Embedd twitch', isDone: false },
  { title: 'Publish site online', isDone: false },
];

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  get() {
    return new Promise(resolve => resolve(TODOS));
  }

}