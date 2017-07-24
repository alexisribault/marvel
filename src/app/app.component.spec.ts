import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {BootstrapGridModule} from 'ng2-bootstrap-grid';

import {AppComponent} from './app.component';

describe('AppComponent', () => {

    let fixture;
    let app;
    let compiled;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                MaterialModule,
                BrowserAnimationsModule,
                RouterModule,
                BootstrapGridModule,
                RouterTestingModule
            ],
            providers: [
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions],
                },
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;
        compiled = fixture.debugElement.nativeElement;
    }));

    it('should create the app', async(() => {
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'Marvel'`, async(() => {
        expect(app.title).toEqual('Marvel');
    }));

    it('should render title in a h1 tag', async(() => {
        fixture.detectChanges();
        expect(compiled.querySelector('h1').textContent).toContain('Marvel');
    }));
});
