export default interface IEvent {
	event: {
		id: number;
		title: string;
		where: string;
		reward: number;
		eventPhoto: string;
		description: string;
		peopleJoined: number;
		peopleTarget: number;
		datesStart: Date;
		datesGoal: Date;
		sponsorId: number;
		requirements: string;
	};
	sponsor: {
		id: number;
		photo: string;
		name: string;
		email: string;
		password: string;
	};
}
