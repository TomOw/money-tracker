import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserPickerComponent} from "./user-picker/user-picker.component";
import {MoneyTrackerMaterialModule} from "../money-tracker-material.module";
import {RouterModule} from "@angular/router";



@NgModule({
	declarations: [
		UserPickerComponent,
	],
	imports: [
		CommonModule,
		MoneyTrackerMaterialModule,
		RouterModule
	],
	exports: [
		UserPickerComponent
	]
})
export class UserModule {
}
