import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Source } from '../source'
import { SourceService } from '../source.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  public sources: Observable<Source[]>;

  constructor( private _sourceService : SourceService ) {
    this.sources = _sourceService.sources$;
  }

  ngOnInit() {
    this._sourceService.getSources();
  }

}
