type BasicType = {
	type: "basic";
	name: string;
};

type AdvancedType = {
	type: "advanced";
	name: string;
	email: string;
};

export default function Component(props: AdvancedType | BasicType) {
	if (props.type === "basic") {
		return (
			<article className="alert alert-success">
				<h2>name: {props.name}</h2>
			</article>
		);
	}
	return (
		<article className="alert alert-danger">
			<h2>name: {props.name}</h2>
			<h2>email: {props.email}</h2>
		</article>
	);
}
