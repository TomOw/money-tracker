import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageService} from "./service/message.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MtHttpInterceptor} from "./service/http-interceptor";
import {MoneyTrackerMaterialModule} from "./money-tracker-material.module";

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MoneyTrackerMaterialModule,
		HttpClientModule
	],
	providers: [
		MessageService,
		{provide: HTTP_INTERCEPTORS, useClass: MtHttpInterceptor, multi: true}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
