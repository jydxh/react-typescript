import React, { createContext, useContext, useState } from "react";

type Theme = "light" | "dark" | "system";

type themeProviderState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

type ThemeProviderProps = {
	children: React.ReactNode;
	defaultTheme?: Theme;
};

const ThemeProviderContext = createContext<themeProviderState | undefined>(undefined);

export function ThemeProvider({ children, defaultTheme = "system" }: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(defaultTheme);
	return <ThemeProviderContext.Provider value={{ theme, setTheme }}>{children}</ThemeProviderContext.Provider>;
}

export const useTheme = () => {
	const ctx = useContext(ThemeProviderContext);
	if (ctx === undefined) {
		throw new Error("useTheme must be used in ThemePriverContext ");
	}
	return ctx;
};
