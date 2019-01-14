import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {MoneyTrackerMaterialModule} from "../money-tracker-material.module";
import {RestModule} from "../rest/rest.module";
import {TileModule} from "../tiles/tile.module";

const routes: Routes = [
	{path: ':id', component: DashboardComponent}
]

@NgModule({
	declarations: [
		DashboardComponent
	],
	imports: [
		CommonModule,
		MoneyTrackerMaterialModule,
		RouterModule.forChild(routes),
		RestModule,
		TileModule
	]
})
export class DashboardModule {
}
