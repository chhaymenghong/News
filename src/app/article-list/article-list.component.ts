import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service'
import { Observable } from 'rxjs';
import { Article } from '../article';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  host: { class : 'ui centered grid container' }
})
export class ArticleListComponent implements OnInit {
  public articles$ : Observable<Article[]>;

  // Inject articleService
  constructor( private _articleService : ArticleService ) {
    this.articles$ = this._articleService.articles$;
  }

  ngOnInit() {
    this._articleService.updateArticles();
  }

}
