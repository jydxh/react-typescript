import { FormEvent } from "react";
import { type Todo } from "./types";
type FormProps = {
	input: string;
	setInput: (i: string) => void;
	addTodo: (i: Todo) => void;
};

function Form({ input, setInput, addTodo }: FormProps) {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// const formData = new FormData(e.currentTarget);
		// const inputValue = formData.get("todo");
		console.log(input);
		/* add inputValue to todos */
		if (input === "") return;
		addTodo({
			id: Math.random().toPrecision(5),
			checked: false,
			detail: input,
		});

		setInput("");
	};
	return (
		<form onSubmit={handleSubmit} className="form task-form">
			<input
				type="text"
				className="form-input"
				name="todo"
				value={input}
				onChange={e => {
					setInput(e.target.value);
				}}
			/>
			<button className="btn " type="submit">
				Submit
			</button>
		</form>
	);
}
export default Form;
