import { useTheme, ThemeProvider } from "./context";

function ParentComponent() {
	return (
		<ThemeProvider>
			<Component />
		</ThemeProvider>
	);
}

function Component() {
	const ctx = useTheme();
	console.log(ctx);
	return (
		<div>
			<h2>React & Typescript</h2>
			<h2>{ctx.theme}</h2>
			<button
				className="btn btn-center "
				onClick={() => {
					if (ctx.theme === "dark") {
						ctx.setTheme("system");
						return;
					}
					ctx.setTheme("dark");
				}}
			>
				Toggle Theme
			</button>
		</div>
	);
}

export default ParentComponent;
