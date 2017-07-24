import {Routes} from '@angular/router';

import {CharacterListComponent} from './components/list/character-list.component';
import {CharacterSingleComponent} from './components/single/character-single.component';

export const characterRoutes: Routes = [
    {path: 'characters', component: CharacterListComponent},
    {path: 'character/:id', component: CharacterSingleComponent}
];
