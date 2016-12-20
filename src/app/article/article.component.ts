import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  inputs: [ 'article' ]
})
export class ArticleComponent implements OnInit {
  public article: Article;
  
  constructor() { }

  ngOnInit() {
  }

}
