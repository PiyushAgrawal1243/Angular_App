import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {StoreModule} from '@ngrx/store';
import * as fromApp from '../../_store/Reducer/app.reducer';
import {AppserviceService} from '../../_services/appservice.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../../_interfaces/user';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    let mockAppService: AppserviceService;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let expectedData: any = [];

    beforeEach(async () => {
        expectedData = [
            { id: '0', Name: 'Piyush Agrawal', Email: 'piyush.agarwal@knoldus.com', }
        ] ;
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DashboardComponent],
            imports: [RouterTestingModule, HttpClientTestingModule, StoreModule.forRoot(fromApp.appReducer)],
            providers: [AppserviceService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        mockAppService = TestBed.inject(AppserviceService);
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
        // @ts-ignore
        spyOn(mockAppService, 'getDataFromServer').and.callThrough();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set the loadedData', () => {
        component.ngOnInit();
        expect(mockAppService.getDataFromServer).toHaveBeenCalled();
    });

    it('should have a ', () => {
        component.ngOnInit();
        const request = mockAppService.getDataFromServer();
        console.log(request);
        expect(request).toBeTruthy();

    });

    it('should check `removeItem` method', () => {
        component.removeItem('Item3');
        expect(mockAppService.getItem()).not.toContain('Item3');
    });

    it('should return serverData', () => {
        mockAppService.getDataFromServer().subscribe(data => expect(data).toEqual( expectedData,
            'should not return serverData'), fail);

        const req = httpTestingController.expectOne(mockAppService.serverdataUrl);
        expect(req.request.method).toEqual('GET');
        req.flush(expectedData);
    });
});
