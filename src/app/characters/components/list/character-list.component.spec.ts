import {TestBed, fakeAsync, tick, async} from '@angular/core/testing';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {CharacterListComponent} from './character-list.component';
import {BootstrapGridModule} from 'ng2-bootstrap-grid';
import {BaseRequestOptions, Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {Helper} from '../../../utilities/helper';

describe('CharacterListComponent', () => {

    let location: Location;
    let router: Router;
    let fixture;
    let compiled;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CharacterListComponent
            ],
            imports: [
                BootstrapGridModule,
                RouterTestingModule.withRoutes([{path: 'characters', component: CharacterListComponent}])
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

        fixture = TestBed.createComponent(CharacterListComponent);
        compiled = fixture.debugElement.nativeElement;

        router.initialNavigation();

    }));

    it('navigate to "characters" takes you to /characters', fakeAsync(() => {
        router.navigate(['/characters']);
        tick(50);
        expect(location.path()).toBe('/characters');
    }));

    it(`should have as title 'Characters'`, async(() => {
        fixture.detectChanges();
        expect(compiled.querySelector('h2').textContent).toContain('Characters');
    }));
});
