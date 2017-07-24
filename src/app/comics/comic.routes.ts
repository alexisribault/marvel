// routes
import {Routes} from '@angular/router';

// components
import { ComicListComponent } from './components/list/comic-list.component';
import { ComicSingleComponent } from './components/single/comic-single.component';

// Route Configuration
export const comicRoutes: Routes = [
    { path: 'comics', component: ComicListComponent },
    { path: 'comic/:id', component: ComicSingleComponent }
];
