import {Component} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material";
import {MessageService} from "./service/message.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(public snackBar: MatSnackBar, public messageService: MessageService) {


		messageService.messageSource$.subscribe(
			message => {
				this.openSnackBar(message.detail, message.summary, message.severity);
			});
	}

	openSnackBar(message: string, summary: string, severity: string) {
		let config: MatSnackBarConfig = new MatSnackBarConfig();
		config.duration = 5000;
		this.snackBar.open((summary + ' ' + message), '', config);
	}
}
