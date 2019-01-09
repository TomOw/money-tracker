import {Component, OnInit} from '@angular/core';
import {UserService} from "../rest/user.service";
import {User} from "../domain/models";
import {ActivatedRoute} from "@angular/router";

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	user: User;

	constructor(private userService: UserService,
				private route: ActivatedRoute) {

	}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.userService.getUserById(params['id']).subscribe(user => {
				this.user = user;
			});
		})
	}

}
