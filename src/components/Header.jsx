import clsx from "clsx";

export default function Header({theme, toggleTheme}) {
  
  return (
    <header
      className={clsx(
        "p-4 border-b-2 transition-colors duration-300 border-gray-200",
        theme === "light" && "bg-white text-gray-800",
        theme === "dark" && "bg-gray-800 text-white"
      )}
    >
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">My App</h1>
        <div className="flex items-center gap-4">
          <span>Welcome, Guest</span>
          <button
            onClick={() => toggleTheme()}
            className={clsx(
              "px-4 py-2 rounded-lg font-medium cursor-pointer",'transition-all duration-300',
              theme === "light" && "bg-gray-800 text-white hover:bg-gray-700 hover:scale-105",
              theme === "dark" && "bg-white text-gray-800 hover:bg-gray-300 hover:scale-105"
            )}
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>
    </header>
  );
}
// 🌙 Dark" : "☀️ Light
