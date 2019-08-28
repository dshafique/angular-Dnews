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

  add(data) {
    return new Promise(resolve => {
      TODOS.push(data);
      resolve(data);
    });
  }

  put(changed) {
  return new Promise(resolve => {
    const index = TODOS.findIndex(todo => todo === changed);
    TODOS[index].title = changed.title;
    resolve(changed);
  });
}

delete(selected) {
  return new Promise(resolve => {
    const index = TODOS.findIndex(todo => todo === selected);
    TODOS.splice(index, 1);
    resolve(true);
  });
}

}