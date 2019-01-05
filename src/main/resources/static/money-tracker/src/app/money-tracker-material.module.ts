import {NgModule} from "@angular/core";
import {MatButtonModule, MatCardModule, MatIconModule, MatSnackBarModule} from "@angular/material";

@NgModule({
	imports: [
		MatButtonModule,
		MatIconModule,
		MatSnackBarModule,
		MatCardModule
	],
	exports: [
		MatButtonModule,
		MatIconModule,
		MatSnackBarModule,
		MatCardModule
	]
})
export class MoneyTrackerMaterialModule {

}