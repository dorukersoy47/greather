import type IEvent from "./lib/interfaces/IEvent";

export const dummyData: IEvent = {
	title: "planting trees",
	where: "Göktürk Ormanı, İstanbul",
	reward: 10,
	eventPhoto:
		"https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBsYW50aW5nJTIwdHJlZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
	description:
		"TeamTrees is inviting you to save the Earth. You and other thousands of strangers will gather in Göktürk Ormanı, İstanbul to plant trees and reduce carbon emission. People are stronger together! Let's save the trees!",
	people: {
		joined: 1000,
		target: 2000,
	},
	dates: {
		start: 1675011557000,
		goal: 1676010025000,
	},
	sponsor: {
		photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Team_Trees_circle_logo.svg/1200px-Team_Trees_circle_logo.svg.png",
		name: "TeamTrees",
	},
	requirements: ["a shovel", "some spare clothes", "gardening gloves"],
};
