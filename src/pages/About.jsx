import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function About() {
  const { theme } = useTheme();

  return (
    <div
      className={clsx(
        "min-h-screen transition-colors duration-300",
        theme === "light" && "bg-white text-gray-800",
        theme === "dark" && "bg-gray-800 text-white"
      )}
    >
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About This App</h1>
          <p
            className={clsx(
              "text-xl",
              theme === "light" && "text-gray-600",
              theme === "dark" && "text-gray-300"
            )}
          >
            A React application demonstrating Context API and modern web
            development practices
          </p>
        </div>

        {/* Features Section */}
        <div
          className={clsx(
            "p-8 rounded-lg mb-8",
            theme === "light" && "bg-blue-50 border border-blue-200",
            theme === "dark" && "bg-blue-900 border border-blue-700"
          )}
        >
          <h2 className="text-2xl font-bold mb-6">Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                🎨 Theme Management
              </h3>
              <p
                className={clsx(
                  theme === "light" && "text-gray-600",
                  theme === "dark" && "text-gray-300"
                )}
              >
                Dynamic light and dark theme switching using React Context API
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">🚀 Modern Stack</h3>
              <p
                className={clsx(
                  theme === "light" && "text-gray-600",
                  theme === "dark" && "text-gray-300"
                )}
              >
                Built with React, Vite, and Tailwind CSS for optimal performance
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                📱 Responsive Design
              </h3>
              <p
                className={clsx(
                  theme === "light" && "text-gray-600",
                  theme === "dark" && "text-gray-300"
                )}
              >
                Mobile-first approach with smooth transitions and animations
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                🔄 State Management
              </h3>
              <p
                className={clsx(
                  theme === "light" && "text-gray-600",
                  theme === "dark" && "text-gray-300"
                )}
              >
                Efficient state sharing without prop drilling using Context API
              </p>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div
          className={clsx(
            "p-8 rounded-lg mb-8",
            theme === "light" && "bg-gray-50 border border-gray-200",
            theme === "dark" && "bg-gray-700 border border-gray-600"
          )}
        >
          <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "React", version: "18.x" },
              { name: "Vite", version: "Latest" },
              { name: "Tailwind CSS", version: "3.x" },
              { name: "React Router", version: "7.x" },
              { name: "clsx", version: "Latest" },
              { name: "ESLint", version: "Latest" },
            ].map((tech, index) => (
              <div
                key={index}
                className={clsx(
                  "p-4 rounded-lg text-center transition-transform hover:scale-105",
                  theme === "light" && "bg-white shadow-sm",
                  theme === "dark" && "bg-gray-800"
                )}
              >
                <div className="font-semibold">{tech.name}</div>
                <div
                  className={clsx(
                    "text-sm",
                    theme === "light" && "text-gray-500",
                    theme === "dark" && "text-gray-400"
                  )}
                >
                  {tech.version}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Section */}
        <div
          className={clsx(
            "p-8 rounded-lg mb-8",
            theme === "light" && "bg-green-50 border border-green-200",
            theme === "dark" && "bg-green-900 border border-green-700"
          )}
        >
          <h2 className="text-2xl font-bold mb-6">Architecture Highlights</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                📁 Component Structure
              </h3>
              <p
                className={clsx(
                  theme === "light" && "text-gray-600",
                  theme === "dark" && "text-gray-300"
                )}
              >
                Organized into logical folders: components, hooks, contexts,
                providers, and pages
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">🎯 Custom Hooks</h3>
              <p
                className={clsx(
                  theme === "light" && "text-gray-600",
                  theme === "dark" && "text-gray-300"
                )}
              >
                Encapsulated theme logic in a reusable{" "}
                <code
                  className={clsx(
                    "px-2 py-1 rounded",
                    theme === "light" && "bg-gray-200",
                    theme === "dark" && "bg-gray-700"
                  )}
                >
                  useTheme
                </code>{" "}
                hook
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">🔗 Context Pattern</h3>
              <p
                className={clsx(
                  theme === "light" && "text-gray-600",
                  theme === "dark" && "text-gray-300"
                )}
              >
                Clean separation between context creation, provider
                implementation, and consumption
              </p>
            </div>
          </div>
        </div>

        {/* Developer Info */}
        <div className="text-center">
          <div
            className={clsx(
              "inline-block p-6 rounded-lg",
              theme === "light" && "bg-gray-100",
              theme === "dark" && "bg-gray-700"
            )}
          >
            <h3 className="text-xl font-bold mb-2">Created by bongoDev</h3>
            <p
              className={clsx(
                theme === "light" && "text-gray-600",
                theme === "dark" && "text-gray-300"
              )}
            >
              Demonstrating modern React development patterns and best practices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
