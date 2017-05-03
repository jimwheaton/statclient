import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { HttpService } from './shared/http.service';
import { httpServiceFactory } from './shared/http-factory.service';
import { LoaderService } from './shared/loader/loader.service';
import { LoaderComponent } from './shared/loader/loader.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './shared/app.routing';
import { ApiService } from './shared/api.service';
import { HomeResolver } from './shared/home-resolver.service';
import { FiltersComponent } from './filters/filters.component';
import { ActionPanelComponent } from './action-panel/action-panel.component';
import { store, IAppState } from './store';
import { StatActions } from './store';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    LoaderComponent,
    FiltersComponent,
    ActionPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [
    ApiService,
    HomeResolver,
    StatActions,
    LoaderService,
        {
            provide: HttpService,
            useFactory: httpServiceFactory,
            deps: [XHRBackend, RequestOptions, LoaderService ]    
        }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>){
    ngRedux.provideStore(store);
  }
}
