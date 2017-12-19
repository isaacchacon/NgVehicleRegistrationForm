import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material';

import {NestedReactiveComponent} from './nested-reactive-component';
//import {NgTaxServices} from '../NgTaxServices/ng-tax-services.module';
import {NgTaxServices} from 'ng-tax-share-point-web-services-module';
import {ReactivePeoplePickerModule} from 'reactive-people-picker-angular-material';

//import {UrlService} from '../NgTaxServices/url-service';


//import {SharepointListsWebService} from 'ng-tax-share-point-web-services-module';
//import {SharePointUserProfileWebService} from '../NgTaxServices/sharepoint-user-profile-web.service';

import { VehicleRegistrationReactiveComponent }  from './vehicle-registration-reactive.component';

@NgModule({
  imports:      [ BrowserModule,HttpClientModule,BrowserAnimationsModule,ReactiveFormsModule,
					NgTaxServices.forRoot(),MatTooltipModule, ReactivePeoplePickerModule],
  declarations: [ VehicleRegistrationReactiveComponent,NestedReactiveComponent],
  bootstrap:    [ VehicleRegistrationReactiveComponent ],
  providers: []
  
})
export class VehicleRegistrationReactiveModule { }
