import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {HttpClientModule} from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from '@angular/material';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import { ImageComponentComponent } from './components/image-component/image-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ConfirmationDialogComponent,
    ImageComponentComponent
  ],
  entryComponents: [ConfirmationDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule, MatDialogModule,
    LazyLoadImageModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
