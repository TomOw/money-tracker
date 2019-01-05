import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {MoneyTrackerMaterialModule} from "../money-tracker-material.module";
import {RouterModule, Routes} from "@angular/router";
import { UserPickerComponent } from './user-picker/user-picker.component';
import {RestModule} from "../rest/rest.module";

const routes: Routes = [
	{path: '', component: HomeComponent}
];

@NgModule({
	imports: [
		MoneyTrackerMaterialModule,
		RouterModule.forChild(routes),
		RestModule
	],
	exports: [],
	declarations: [
		HomeComponent,
		UserPickerComponent
	]

})
export class HomeModule {

}