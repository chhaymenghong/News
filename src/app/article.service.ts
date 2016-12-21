import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Article } from './article';
import { environment} from '../environments/environment';
import 'rxjs/add/operator/map';


@Injectable()
export class ArticleService {
  private _articleSubject: BehaviorSubject<Article[]> =
    new BehaviorSubject<Article[]>([]);
  private _filterBy: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  public articles$: Observable<Article[]>;

  // Inject http module
  constructor( private http: Http ) {
    this.articles$ = Observable.combineLatest( this._articleSubject, this._filterBy )
      .map( ([articles, filterString]) => {
        const reg = new RegExp( filterString, 'gi');
        return articles.filter( article => {
          return reg.test( article.title ) || reg.exec( article.description );
        })
      })
  }

  public updateArticles( sourceKey ) {
    this._makeHttpRequest( environment.articlePath, sourceKey )
      .map( json => json.articles )
      .subscribe( listOfArticleJson => {
        var articles = listOfArticleJson.map( articleJson => Article.fromJson( articleJson ) );
        this._articleSubject.next( articles );
      } );
  }

  public searchBy( title ) {
    this._filterBy.next( title );
  }

  private _makeHttpRequest( path:string, sourceKey: string ) : Observable<any> {
    var params = new URLSearchParams();
    params.set('apiKey', environment.apiKey );
    params.set('source', sourceKey );
    // params.set('sortBy', sortBy );
    return this.http.get( `${environment.baseUrl}${path}`, { search: params } )
      .map( resp => resp.json() );
  }

}
