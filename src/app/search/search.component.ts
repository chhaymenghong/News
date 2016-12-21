import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  host: { class: 'ui icon input' }
})
export class SearchComponent implements OnInit {

  constructor( private _elementRef: ElementRef, private _articleService : ArticleService ) { }

  ngOnInit() {
    Observable.fromEvent( this._elementRef.nativeElement, 'keyup')
      .map( ( event:any )  => event.target.value )
      // .filter( value => value.length > 0 )
      .distinctUntilChanged()
      .debounceTime(1000)
      .subscribe( value => {
        // console.log('sdfsdfs');
        this._articleService.searchBy( value ); } );
  }

}
