import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {MoneyTrackerMaterialModule} from "../money-tracker-material.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
	{path: '', component: HomeComponent}
];

@NgModule({
	imports: [
		MoneyTrackerMaterialModule,
		RouterModule.forChild(routes)
	],
	exports: [],
	declarations: [
		HomeComponent
	]

})
export class HomeModule {

}