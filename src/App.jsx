import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { useState } from "react";

export default function App() {
  // theme state
  const [theme, setTheme] = useState("light");

  // themeToggler function
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <div className="flex flex-1">
        <Sidebar theme={theme}/>
        <MainContent />
      </div>
    </div>
  );
}
