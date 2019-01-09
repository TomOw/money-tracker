import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../rest/user.service";
import {Sex, User} from "../../domain/models";

@Component({
	selector: 'user-picker',
	templateUrl: './user-picker.component.html',
	styleUrls: ['./user-picker.component.scss']
})
export class UserPickerComponent implements OnInit {

	users: User[];

	sex = Sex;

	@Output('onUserPicked')
	onUserPicked = new EventEmitter<User>();

	constructor(private userService: UserService) {
	}

	ngOnInit() {
		this.userService.getAllUsers().subscribe(users => {
			this.users = users;
		});
	}

	pickUser(user: User) {
		console.log(user);
		this.onUserPicked.emit(user);
	}

}
