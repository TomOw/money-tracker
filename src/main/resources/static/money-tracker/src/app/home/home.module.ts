import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {MoneyTrackerMaterialModule} from "../money-tracker-material.module";
import {RouterModule, Routes} from "@angular/router";
import {RestModule} from "../rest/rest.module";
import {UserModule} from "../user/user.module";
import {CommonModule} from "@angular/common";

const routes: Routes = [
	{path: '', component: HomeComponent},
];

@NgModule({
	imports: [
		MoneyTrackerMaterialModule,
		RouterModule.forChild(routes),
		RestModule,
		UserModule,
		CommonModule
	],
	exports: [],
	declarations: [
		HomeComponent,
	]

})
export class HomeModule {

}