import {Component, OnInit} from '@angular/core';
import {UserService} from "../../rest/user.service";

@Component({
	selector: 'user-picker',
	templateUrl: './user-picker.component.html',
	styleUrls: ['./user-picker.component.scss']
})
export class UserPickerComponent implements OnInit {

	constructor(private userService: UserService) {
	}

	ngOnInit() {
		this.userService.getAllUsers().subscribe(users => {
			console.log(users);
		});
	}

}
