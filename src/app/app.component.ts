import { Component } from '@angular/core';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // Add this service here so that all this component children
  // can use the same instance of ArticleService
  providers: [ ArticleService ]
})
export class AppComponent {

}
