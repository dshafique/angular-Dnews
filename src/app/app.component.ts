import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {
 public constructor(private titleService: Title ) { 
   this.titleService.setTitle("D News");
 }

public setTitle( newTitle: string) {
 this.titleService.setTitle( newTitle );
 }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/