export interface IPost {
	title: string;
	author: string;
	body: string;
	url: string;
	time: string | Date;
}

export interface IPosts {
	posts?: Array<IPost>;
}
