import {TestBed, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';
import * as fromApp from './_store/Reducer/app.reducer';
import {AppserviceService} from './_services/appservice.service';
import {Location} from '@angular/common';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';


describe('AppComponent', () => {
    let app: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let appService: AppserviceService;
    let de: DebugElement;



    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            providers: [AppserviceService],
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                StoreModule.forRoot(fromApp.appReducer)]
        }).compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        appService = TestBed.inject(AppserviceService);
        app = fixture.debugElement.componentInstance;
        de = fixture.debugElement;


    });

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });


    it(`should have as title 'Angular'`, () => {
        expect(app.title).toEqual('Angular');
    });

    it('check if title is not `Anhular`', () => {
        expect(app.title).not.toBe('Anhular');
    });

    it('should getItem run', () => {
        const dummyItem = ['Hellow', 'Ambuj'];
        app.addItem(dummyItem[0]);
        app.addItem(dummyItem[1]);
        const item = appService.getItem();
        console.log(item);
        expect(item).toContain(dummyItem[0]);

    });

    it('should check title ', () => {
        const  appnav = de.query(By.css('app-nav'));
        console.log(appnav);


        
    });


});
