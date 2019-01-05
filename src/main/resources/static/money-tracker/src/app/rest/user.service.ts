import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../domain/models";

@Injectable()
export class UserService {

	constructor(private http: HttpClient) {
	}

	getAllUsers(): Observable<User[]> {
		return this.http.get<User[]>('/api/user/all');
	}

	getAllUsersError(): Observable<User> {
		return this.http.get<User>('/api/userhjkjhgf/all');
	}
}
