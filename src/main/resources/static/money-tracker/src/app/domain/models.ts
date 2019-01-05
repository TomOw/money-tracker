export class User {
	id: number;
	name: string;
	sex: Sex;
	earnings: number;
	balance: number;
}

export enum Sex {
	MALE = 'MALE',
	FEMALE = 'FEMALE'
}

export class NotificationMessage {
	severity: string;
	summary: string;
	detail: string;
}
