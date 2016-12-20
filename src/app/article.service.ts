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
  public articles$ = this._articleSubject.asObservable();

  // Inject http module
  constructor( private http: Http ) {
  }

  public updateArticles() {
    this._makeHttpRequest( environment.articlePath )
      .map( json => json.articles )
      .subscribe( listOfArticleJson => {
        var articles = listOfArticleJson.map( articleJson => Article.fromJson( articleJson ) );
        this._articleSubject.next( articles );
      } );
  }

  private _makeHttpRequest( path:string, source = environment.defaultSource, sortBy = environment.defaultSort ) : Observable<any> {
    var params = new URLSearchParams();
    params.set('apiKey', environment.apiKey );
    params.set('source', source );
    // params.set('sortBy', sortBy );
    return this.http.get( `${environment.baseUrl}${path}`, { search: params } )
      .map( resp => resp.json() );
  }

}
