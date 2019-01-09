import {NgModule} from "@angular/core";
import {MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatSnackBarModule} from "@angular/material";

@NgModule({
	imports: [
		MatButtonModule,
		MatIconModule,
		MatSnackBarModule,
		MatCardModule,
		MatDividerModule
	],
	exports: [
		MatButtonModule,
		MatIconModule,
		MatSnackBarModule,
		MatCardModule,
		MatDividerModule
	]
})
export class MoneyTrackerMaterialModule {

}