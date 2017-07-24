import {TestBed, fakeAsync, tick, async, inject} from '@angular/core/testing';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

import {ComicSingleComponent} from './comic-single.component';
import {Helper} from '../../../utilities/helper';
import {ComicService} from '../../comic.service';

import {BaseRequestOptions, Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {BootstrapGridModule} from 'ng2-bootstrap-grid';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

describe('ComicSingleComponent', () => {

    let location: Location;
    let router: Router;
    let fixture;
    let service: ComicService = null;
    let mockbackend: MockBackend = null;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ComicSingleComponent
            ],
            imports: [
                MaterialModule,
                BrowserAnimationsModule,
                RouterModule,
                BootstrapGridModule,
                RouterTestingModule.withRoutes([{path: 'comic/:id', component: ComicSingleComponent}])
            ],
            providers: [
                MockBackend,
                BaseRequestOptions,
                Helper,
                ComicService,
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

        fixture = TestBed.createComponent(ComicSingleComponent);
        router.initialNavigation();

    }));

    beforeEach(inject([ComicService, MockBackend], (comicService: ComicService, mockBackend: MockBackend) => {
        service = comicService;
        mockbackend = mockBackend;
    }));


    it('navigate to "Ant-Man" url takes you to /comic/323', fakeAsync(() => {
        router.navigate(['comic/323']);
        tick();
        expect(location.path()).toBe('/comic/323');
    }));
});
