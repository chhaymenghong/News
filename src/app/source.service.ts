import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';
import { Observable, BehaviorSubject } from 'rxjs';

import { Source } from './source';


@Injectable()
export class SourceService {
  private _sourceSubject : BehaviorSubject<Source[]> = new BehaviorSubject<Source[]>([]);
  public sources$ : Observable<Source[]> = this._sourceSubject.asObservable();

  constructor( private _http: Http ) {
  }

  public getSources() {
    this._makeRequest( environment.sourcePath )
      .map( json => json.sources )
      .subscribe( sources => {
        var sources = sources.map( sourceJson => Source.fromJson( sourceJson ) );
        this._sourceSubject.next( sources );
      } );
  }

  private _makeRequest( path:string ) : Observable<any> {
    var params = new URLSearchParams();
    params.set('apiKey', environment.apiKey );
    return this._http.get(`${environment.baseUrl}${path}`, { search : params } )
      .map(resp => resp.json());
  }

}
