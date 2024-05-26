/* type ComponentProps = {
	name: string;
	id: number;
	children?: React.ReactNode;
};

function Component({ name, id, children }: ComponentProps) {
	return (
		<div>
			<h2>name: {name}</h2>
			<h2>id: {id}</h2>
			<h2>{children}</h2>
		</div>
	);
}
export default Component;
 */
/* 
import { type PropsWithChildren } from "react";

type ComponentProps = PropsWithChildren<{
	name: string;
	id: number;
}>;

function Component({ name, id, children }: ComponentProps) {
	return (
		<div>
			<h2>name: {name}</h2>
			<h2>id: {id}</h2>
			<h2>{children}</h2>
		</div>
	);
} */
type PropsType = {
	name: string;
	id: number;
	children?: React.ReactNode;
};

const Component: React.FC<PropsType> = ({ name, id, children }) => {
	return (
		<div>
			<h2>name: {name}</h2>
			<h2>id: {id}</h2>
			<h3>{children}</h3>
		</div>
	);
};
export default Component;
