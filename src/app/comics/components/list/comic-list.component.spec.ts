import {TestBed, fakeAsync, tick, async} from '@angular/core/testing';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {ComicListComponent} from './comic-list.component';
import {BootstrapGridModule} from 'ng2-bootstrap-grid';
import {BaseRequestOptions, Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {Helper} from '../../../utilities/helper';

describe('ComicListComponent', () => {

    let location: Location;
    let router: Router;
    let fixture;
    let compiled;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ComicListComponent
            ],
            imports: [
                BootstrapGridModule,
                RouterTestingModule.withRoutes([{path: 'comics', component: ComicListComponent}])
            ],
            providers: [
                MockBackend,
                BaseRequestOptions,
                Helper,
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

        fixture = TestBed.createComponent(ComicListComponent);
        compiled = fixture.debugElement.nativeElement;

        router.initialNavigation();

    }));

    it('navigate to "comics" takes you to /comics', fakeAsync(() => {
        router.navigate(['comics']);
        tick(50);
        expect(location.path()).toBe('/comics');
    }));

    it(`should have as title 'Comics'`, async(() => {
        fixture.detectChanges();
        expect(compiled.querySelector('h2').textContent).toContain('Comics');
    }));
});
