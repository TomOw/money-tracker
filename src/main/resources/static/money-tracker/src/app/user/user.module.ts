import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserPickerComponent} from "./user-picker/user-picker.component";
import {MoneyTrackerMaterialModule} from "../money-tracker-material.module";
import {UserComponent} from './user/user.component';

@NgModule({
	declarations: [
		UserPickerComponent,
		UserComponent
	],
	imports: [
		CommonModule,
		MoneyTrackerMaterialModule
	],
	exports: [
		UserPickerComponent
	]
})
export class UserModule {
}
