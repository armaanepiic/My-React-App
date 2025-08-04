import { createContext } from "react";

// context creating
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});
export default ThemeContext;
