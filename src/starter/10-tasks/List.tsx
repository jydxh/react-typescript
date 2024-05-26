import { Todo } from "./types";
type ListProps = {
	todos: Todo[];
	updateCheck: (id: string) => void;
};
function List({ todos, updateCheck }: ListProps) {
	const handleChange = (id: string) => {
		// get the id of the choosed list and toogle the checked value

		updateCheck(id);
	};

	return (
		<ul className="list">
			{todos.map(todo => (
				<li key={todo.id}>
					{todo.detail}
					<input
						type="checkbox"
						checked={todo.checked}
						onChange={() => {
							handleChange(todo.id);
						}}
					/>
				</li>
			))}
		</ul>
	);
}
export default List;
