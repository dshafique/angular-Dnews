import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

    mArticles:Array<any>;
  mSources:Array<any>;

  constructor(private news:NewsService){
    console.log('app component constructor called');         
  }

  ngOnInit() {
        //load articles
      this.news.initArticles().subscribe(data => this.mArticles = data['articles']);
    //load news sources
    this.news.initSources().subscribe(data=> this.mSources = data['sources']);  
    }

  searchArticles(source){
    console.log("selected source is: "+source);
    this.news.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }



}