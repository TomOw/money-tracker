import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../domain/models";
import {NavigationEnd, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

	user: User;

	routerSubscription: Subscription;

	constructor(private router: Router) {
	}

	ngOnInit() {
		this.routerSubscription = this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				console.log(event);
			}
		})
	}

	ngOnDestroy(): void {
		this.routerSubscription.unsubscribe();
	}

	onUserPicked(user: User) {
		this.user = user;
		this.router.navigate(['dashboard', user.id]).then(result => {
		});
	}
}
