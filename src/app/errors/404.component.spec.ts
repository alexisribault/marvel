import {TestBed, fakeAsync, tick, async} from '@angular/core/testing';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {NotFoundComponent} from './404.component';
import {BootstrapGridModule} from 'ng2-bootstrap-grid';
import {BaseRequestOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

describe('NotFoundComponent', () => {

    let location: Location;
    let router: Router;
    let fixture;
    let compiled;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NotFoundComponent
            ],
            imports: [
                BootstrapGridModule,
                RouterTestingModule.withRoutes([
                    {path: '404', component: NotFoundComponent},
                    {path: '**', redirectTo: '/404'}
                ])
            ],
            providers: [
                MockBackend,
                BaseRequestOptions
            ]
        }).compileComponents();

        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture = TestBed.createComponent(NotFoundComponent);
        compiled = fixture.debugElement.nativeElement;

        router.initialNavigation();

    }));

    it('navigate to "characters" takes you to /characters', fakeAsync(() => {
        router.navigate(['/randomurl']);
        tick(50);
        expect(location.path()).toBe('/404');
    }));

    it(`should have as title '404 Not Found'`, async(() => {
        fixture.detectChanges();
        expect(compiled.querySelector('h2').textContent).toContain('404 Not Found');
    }));
});
