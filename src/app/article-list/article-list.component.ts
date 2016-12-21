import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service'
import { Observable } from 'rxjs';
import { Article } from '../article';

// Inject this to look up routing param
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  // Add container class to center everything in the middle
  // of the screen
  host: { class : 'ui centered grid' }
})
export class ArticleListComponent implements OnInit {
  public articles$ : Observable<Article[]>;

  // Inject articleService
  constructor( private _articleService : ArticleService,
               private _activatedRoute : ActivatedRoute ) {
    this.articles$ = this._articleService.articles$;
  }

  ngOnInit() {
    // params from ActivatedRoute is an observable<param>
    this._activatedRoute.params.subscribe( params => {
      var sourceKey = params['sourceKey']
      this._articleService.updateArticles( sourceKey );
    })
  }

}
