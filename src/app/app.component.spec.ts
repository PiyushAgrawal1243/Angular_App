import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {AppserviceService} from './Services/appservice.service';


describe('Component: App', () =>{
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent]
    });
  }),

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should use the app name from tha AppService', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const userService  = fixture.debugElement.injector.get(AppserviceService);
    fixture.detectChanges();
    expect(userService.getItem).toEqual(app.items);
  });
});
