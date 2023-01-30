export default interface IEvent {
	id: number;
	title: string;
	where: string;
	reward: number;
	eventPhoto: string;
	description: string;
	people: {
		joined: number;
		target: number;
	};
	dates: {
		start: number;
		goal: number;
	};
	sponsor: {
		photo: string;
		name: string;
	};
	requirements: Array<string>;
}
