import {TestBed, fakeAsync, tick, async} from '@angular/core/testing';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HomeComponent} from './home.component';
import {BootstrapGridModule} from 'ng2-bootstrap-grid';

describe('HomeComponent', () => {

    let location: Location;
    let router: Router;
    let fixture;
    let compiled;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent
            ],
            imports: [
                BootstrapGridModule,
                RouterTestingModule
            ],
            providers: []
        }).compileComponents();

        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture = TestBed.createComponent(HomeComponent);
        compiled = fixture.debugElement.nativeElement;

        router.initialNavigation();

    }));

    it(`should have as title 'Welcome to Marvel Third Party Website'`, async(() => {
        fixture.detectChanges();
        expect(compiled.querySelector('h2').textContent).toContain('Welcome to Marvel Third Party Website');
    }));

    it('navigate to "" takes you to /', fakeAsync(() => {
        router.navigate(['']);
        tick();
        expect(location.path()).toBe('/');
    }));
});
