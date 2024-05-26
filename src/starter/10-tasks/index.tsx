import Form from "./Form";
import List from "./List";
import { useEffect, useState } from "react";
import { Todo } from "./types";

function loadTask(): Todo[] {
	const storedTask = localStorage.getItem("todos");
	return storedTask ? JSON.parse(storedTask) : [];
}

function updateTask(todos: Todo[]) {
	localStorage.setItem("todos", JSON.stringify(todos));
}

function Component() {
	const [input, setInput] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>(loadTask());

	useEffect(() => {
		updateTask(todos);
	}, [todos]);

	const addTodo = (todo: Todo) => {
		setTodos(state => {
			return [...state, todo];
		});
	};

	const updateCheck = (id: string) => {
		setTodos(
			todos.map(todo => {
				return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
			})
		);
	};

	return (
		<>
			<Form input={input} setInput={setInput} addTodo={addTodo} />
			<List todos={todos} updateCheck={updateCheck} />
		</>
	);
}
export default Component;
