import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpEvent, HttpResponse, HttpErrorResponse
} from '@angular/common/http';

import {Injectable, Injector} from "@angular/core";
import {MessageService} from "./message.service";
import {GlobalVariable} from "../globals";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable()
export class MtHttpInterceptor implements HttpInterceptor {
	messageService: MessageService;
	BACKEND_URL = GlobalVariable.BASE_API_URL;

	constructor(private injector: Injector) {
	}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		if (!this.messageService)
			this.messageService = this.injector.get(MessageService); // get it here within intercept

		let targetRequest;
		if (request.method === 'POST') {
			targetRequest = request.clone({
				headers: request.headers.set('Content-Type', 'application/json').set('charset', 'utf-8'),
				body: JSON.stringify(request.body),
				url: this.BACKEND_URL + request.url
			});
		} else {
			targetRequest = request.clone({
				headers: request.headers.set('Content-Type', 'application/json').set('charset', 'utf-8'),
				url: this.BACKEND_URL + request.url
			});
		}

		return next.handle(targetRequest).pipe(
			map((response: HttpEvent<any>) => {
				if (response instanceof HttpResponse) {
					//response ok
				}
				return response;
			}),
			catchError((error: HttpErrorResponse) => {
				this.messageService.error(`Error ${error.status}`, error.message);
				return throwError(error);
			})
		);
	}
}
