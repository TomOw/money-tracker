import { Injectable } from '@angular/core'
import {NotificationMessage} from "../domain/models";
import {Subject} from "rxjs";

@Injectable()
export class MessageService {
	private messageSource = new Subject<NotificationMessage>();

	messageSource$ = this.messageSource.asObservable();

	success(summary : string, detail : string) {
		this.messageSource.next({severity:'success', summary: summary, detail: detail});
		console.log("INFO: " + summary + " DETAIL: " + detail);
	}

	info(summary : string, detail : string) {
		this.messageSource.next({severity:'info', summary: summary, detail: detail});
		console.log("INFO: " + summary + " DETAIL: " + detail);
	}

	warning(summary : string, detail : string) {
		this.messageSource.next({severity:'warn', summary: summary, detail: detail});
		console.log("ERROR: " + summary + " DETAIL: " + detail);
	}

	error(summary : string, detail : string) {
		this.messageSource.next({severity:'error', summary: summary, detail: detail});
		console.log("ERROR: " + summary + " DETAIL: " + detail);
	}
}