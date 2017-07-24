// modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {MdGridListModule} from '@angular/material';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BootstrapGridModule} from 'ng2-bootstrap-grid';

// services
import {ComicService} from './comics/comic.service';
import {CharacterService} from './characters/character.service';

// components
import {AppComponent} from './app.component';
import {ComicListComponent} from './comics/components/list/comic-list.component';
import {ComicSingleComponent} from './comics/components/single/comic-single.component';
import {CharacterListComponent} from './characters/components/list/character-list.component';
import {CharacterSingleComponent} from './characters/components/single/character-single.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './errors/404.component';

// others
import {routing} from './app.routes';
import {Helper} from './utilities/helper';


@NgModule({
    declarations: [
        AppComponent,
        ComicListComponent,
        ComicSingleComponent,
        CharacterListComponent,
        CharacterSingleComponent,
        HomeComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        MdGridListModule,
        MaterialModule,
        BrowserAnimationsModule,
        BootstrapGridModule,
        routing
    ],
    providers: [
        ComicService,
        CharacterService,
        Helper
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
