interface User {
	readonly dbId: number;
	email: string;
	userId: number;
	googleId?: string; // optional
	startTrail(): string;
	getCoupon(couponname: string): number;
}

const Aditya: User = {
	dbId: 234,
	email: "",
	userId: 234,
	startTrail: () => {
		return "trail started";
	},
	getCoupon:(ghf)=> {
		return 65;
	},
};
