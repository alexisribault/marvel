import {TestBed, fakeAsync, tick, async, inject} from '@angular/core/testing';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

import {CharacterSingleComponent} from './character-single.component';
import {Helper} from '../../../utilities/helper';
import {CharacterService} from '../../character.service';

import {BaseRequestOptions, Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {BootstrapGridModule} from 'ng2-bootstrap-grid';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

describe('CharacterSingleComponent', () => {

    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CharacterSingleComponent
            ],
            imports: [
                MaterialModule,
                BrowserAnimationsModule,
                RouterModule,
                BootstrapGridModule,
                RouterTestingModule.withRoutes([{path: 'character/:id', component: CharacterSingleComponent}])
            ],
            providers: [
                MockBackend,
                BaseRequestOptions,
                Helper,
                CharacterService,
                {
                    provide: Http,
                    useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions],
                },
            ]
        }).compileComponents();

        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture = TestBed.createComponent(CharacterSingleComponent);
        router.initialNavigation();

    }));

    it('navigate to "3-D Man" url takes you to /character/1011334', fakeAsync(() => {
        router.navigate(['character/1011334']);
        tick();
        expect(location.path()).toBe('/character/1011334');
    }));
});
