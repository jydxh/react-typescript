const url = "https://www.course-api.com/react-tours-project";
import { type Tour, tourSchema, fetchTours } from "./types";
import { useQuery } from "@tanstack/react-query";

// type tour = {
// 	id: string;
// 	image: string;
// 	info: string;
// 	name: string;
// 	price: string;
// };

export default function Component() {
	const {
		isPending,
		isError,
		error,
		data: tours,
	} = useQuery({
		queryKey: ["tours"],
		queryFn: fetchTours,
	});

	if (isPending) {
		return <h3>Loading...</h3>;
	}
	if (isError) {
		return <h2>error: {error.message}</h2>;
	}
	return (
		<div>
			<h2 className="mb-1">Tours</h2>
			{tours.map(tour => {
				return (
					<p
						key={tour.id}
						className="mb-1"
					>
						{tour.name}
					</p>
				);
			})}
		</div>
	);
}
