import { useState } from "react";

type Person = {
	name: string;
};

function Component() {
	const [text, setText] = useState("");
	const [email, setEmail] = useState("");
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value);
		setEmail(event.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		//const formData = new FormData(e.target as HTMLFormElement);
		console.log(formData);
		const data = Object.fromEntries(formData);
		console.log(data);
		const text = formData.get("text") as string;
		const person: Person = { name: data.text as string };
		console.log(text, person);
	};
	return (
		<div>
			<h2>events example</h2>
			<form
				className="form"
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					className="form-input mb-1"
					name="text"
					value={text}
					onChange={events => {
						setText(events.target.value);
					}}
				/>
				<input
					type="email"
					className="form-input mb-1"
					name="email"
					value={email}
					onChange={handleChange}
				/>
				<button
					type="submit"
					className="btn btn-block"
				>
					Submit
				</button>
			</form>
		</div>
	);
}
export default Component;
