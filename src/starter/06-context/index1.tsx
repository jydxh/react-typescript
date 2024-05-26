import { ThemeContextProvider, useTheme } from "./context1";

export default function Parents() {
	return (
		<ThemeContextProvider>
			<Component1 />
		</ThemeContextProvider>
	);
}

const Component1 = () => {
	const { theme, setTheme } = useTheme();
	return (
		<>
			<h1>{theme}</h1>
			<button
				onClick={() => {
					if (theme !== "dark") {
						setTheme("dark");
					} else {
						setTheme("light");
					}
				}}
			>
				Toggle Theme
			</button>
		</>
	);
};
