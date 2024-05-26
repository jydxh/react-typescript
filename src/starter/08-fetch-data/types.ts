import axios from "axios";

const url = "https://www.course-api.com/react-tours-project";
type Tour = {
	id: string;
	image: string;
	info: string;
	name: string;
	price: string;
};

export const fetchTours = async (): Promise<Tour[]> => {
	const res = await axios.get<Tour[]>(url);
	//const result = tourSchema.array().safeParse(res.data);
	if (res.status !== 200) {
		console.log(res);
		throw new Error(`failed to parse tours`);
	}
	console.log(res.data);
	return res.data;
};
