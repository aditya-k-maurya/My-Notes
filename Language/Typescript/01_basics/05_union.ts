// unions operator give option to use any one of the following datatype

//union
let score: number | string = 33;

score = 44;
score = "55";

type User = {
	name: string;
	id: number;
};

type Admin = {
	username: string;
	id: number;
};

//union in aliases data type
let aditya: User | Admin = { name: "Aditya", id: 345 };

aditya = {
	username: "hdgs",
	id: 355,
};


// union in function
function getDbId(id: number | string) {
	if (typeof id === "string") {
		id.toLowerCase();
	}
}

//union in array
const data: (string | number | boolean)[] = [2, 3, 5, '2']

