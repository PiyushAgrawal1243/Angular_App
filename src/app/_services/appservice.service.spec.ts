import {TestBed} from '@angular/core/testing';

import {AppserviceService} from './appservice.service';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';

import * as fromApp from '../_store/Reducer/app.reducer';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

describe('AppserviceService', () => {
    let service: AppserviceService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AppserviceService],
            imports: [RouterTestingModule, HttpClientTestingModule, StoreModule.forRoot(fromApp.appReducer)],

        });
        service = TestBed.inject(AppserviceService);

    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should have getItem function', () => {
        expect(service.getItem).toBeTruthy();
    });


});
