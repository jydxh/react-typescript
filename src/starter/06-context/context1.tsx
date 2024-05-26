import React, { createContext, useContext, useState } from "react";
type Theme = "light" | "dark" | "system";
type ThemeCtx = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};
type ThemeContextProps = {
	children: React.ReactNode;
	defaultTheme?: Theme;
};

const themeContext = createContext<ThemeCtx | undefined>(undefined);

export const ThemeContextProvider: React.FC<ThemeContextProps> = ({ children, defaultTheme = "dark" }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);
	return <themeContext.Provider value={{ theme, setTheme }}>{children}</themeContext.Provider>;
};

export const useTheme = () => {
	const ctx = useContext(themeContext);
	if (ctx === undefined) {
		throw new Error("useTheme must be called inside of the ThemeContextProvider");
	}
	return ctx;
};
