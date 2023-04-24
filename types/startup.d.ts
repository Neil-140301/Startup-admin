export interface Startup {
	id: string;
	name: string;
	foundedYear: number;
	oneLiner: string;
	stage: string;
	industry: string;
	logoUrl: string;
	website: string;
	incorporatedLocation: string;
	fundraiseStage: string;
	targetRaise: number;
	targetEquity: number;
	metrics: any[];
	productHighlights: string[];
	raises: Raise[];
	members: Member[];
	match: number;
	bookmarked: boolean;
	status?: string;
}

export interface Raise {
	id: string;
	amountRaised: number;
}

export interface Member {
	id: string;
	firstName: string;
	lastName: string;
	role: string;
	pictureUrl: string;
}

export type StartupList = {
	active: Startup[];
	review: Startup[];
};

export type ManageLoaderResult = {
	data: Startup[];
	id?: string;
};
