// Modules
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// components
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './errors/404.component';

// routes
import {comicRoutes} from './comics/comic.routes';
import {characterRoutes} from './characters/character.routes';

// Route Configuration
export const routes: Routes = [
    ...comicRoutes,
    ...characterRoutes,
    {path: '', component: HomeComponent},
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '/404'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
