import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ModuleWithProviders} from '@angular/core'

// To create route: do the following:
// 1. Create app.routes.ts file
// 2. Create variable of type Routes, which is an array
//  containing all the route in the format of ({path: 'path', component: ComponentName })
// 3. To create a home route look at the example below
// 4. export out this route by RouterModule.forRoot(2)
// 5. In app.module, import this file and add it to the list of imports
// 6. Add a directive <router-outlet-></router-outlet> as a spot to swap out each component
// corresponding to each route.
// 7. Use routerLink on a tag to link a tag to a specific route: ie:
  // <a routerLink='/news/{{param}}'>
// 8. Use routerLinkActive='active' to highlight active item


const routes : Routes = [
    // root path
    {
      path: '',
      redirectTo: 'news/abc-news-au',
      pathMatch: 'full'
    },
    {
      path : 'news/:sourceKey',
      component : ArticleListComponent
    }
];

export const appRoutes = RouterModule.forRoot( routes );
