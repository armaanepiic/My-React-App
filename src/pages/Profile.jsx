import clsx from "clsx";
import useTheme from "../hooks/useTheme";
import { useParams } from "react-router";

export default function Profile() {
  const { theme } = useTheme();
  const { profileId } = useParams();
  // const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div
      className={clsx(
        "p-8 transition-colors duration-300 mx-auto w-full",
        theme === "light" && "bg-white text-gray-800",
        theme === "dark" && "bg-gray-800 text-white"
      )}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{`Profile ID: ${profileId}`}</h1>
          <p
            className={clsx(
              "text-lg",
              theme === "light" && "text-gray-600",
              theme === "dark" && "text-gray-300"
            )}
          >
            Manage your account settings and preferences
          </p>
        </div>

        {/* Profile Card */}
        <div
          className={clsx(
            "p-6 rounded-lg mb-8 border",
            theme === "light" && "bg-gray-50 border-gray-200",
            theme === "dark" && "bg-gray-700 border-gray-600"
          )}
        >
          <div className="flex items-center space-x-6">
            {/* Avatar */}
            <div
              className={clsx(
                "ring-1 ring-blue-400 w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold",
                theme === "light" && "bg-blue-100 text-blue-600",
                theme === "dark" && "bg-blue-900 text-blue-400"
              )}
            >
              U
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-1">Guest User</h2>
              <p
                className={clsx(
                  "mb-2",
                  theme === "light" && "text-gray-600",
                  theme === "dark" && "text-gray-300"
                )}
              >
                guest@example.com
              </p>
              <p
                className={clsx(
                  "text-sm",
                  theme === "light" && "text-gray-500",
                  theme === "dark" && "text-gray-400"
                )}
              >
                Member since January 2024
              </p>
            </div>

            {/* Edit Button */}
            <button
              className={clsx(
                "px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105",
                theme === "light" && "bg-blue-600 text-white hover:bg-blue-700",
                theme === "dark" && "bg-blue-500 text-white hover:bg-blue-600"
              )}
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Profile Details */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div
            className={clsx(
              "p-6 rounded-lg border",
              theme === "light" && "bg-white border-gray-200",
              theme === "dark" && "bg-gray-700 border-gray-600"
            )}
          >
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>

            <div className="space-y-4">
              <div>
                <label
                  className={clsx(
                    "block text-sm font-medium mb-1",
                    theme === "light" && "text-gray-700",
                    theme === "dark" && "text-gray-300"
                  )}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Guest User"
                  className={clsx(
                    "w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500",
                    theme === "light" &&
                      "bg-white border-gray-300 text-gray-800",
                    theme === "dark" && "bg-gray-600 border-gray-500 text-white"
                  )}
                />
              </div>

              <div>
                <label
                  className={clsx(
                    "block text-sm font-medium mb-1",
                    theme === "light" && "text-gray-700",
                    theme === "dark" && "text-gray-300"
                  )}
                >
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="guest@example.com"
                  className={clsx(
                    "w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500",
                    theme === "light" &&
                      "bg-white border-gray-300 text-gray-800",
                    theme === "dark" && "bg-gray-600 border-gray-500 text-white"
                  )}
                />
              </div>

              <div>
                <label
                  className={clsx(
                    "block text-sm font-medium mb-1",
                    theme === "light" && "text-gray-700",
                    theme === "dark" && "text-gray-300"
                  )}
                >
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className={clsx(
                    "w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500",
                    theme === "light" &&
                      "bg-white border-gray-300 text-gray-800",
                    theme === "dark" && "bg-gray-600 border-gray-500 text-white"
                  )}
                />
              </div>
            </div>
          </div>

          {/* Account Stats */}
          <div
            className={clsx(
              "p-6 rounded-lg border",
              theme === "light" && "bg-white border-gray-200",
              theme === "dark" && "bg-gray-700 border-gray-600"
            )}
          >
            <h3 className="text-xl font-semibold mb-4">Account Statistics</h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span
                  className={clsx(
                    theme === "light" && "text-gray-600",
                    theme === "dark" && "text-gray-300"
                  )}
                >
                  Profile Views
                </span>
                <span className="font-semibold">1,234</span>
              </div>

              <div className="flex justify-between items-center">
                <span
                  className={clsx(
                    theme === "light" && "text-gray-600",
                    theme === "dark" && "text-gray-300"
                  )}
                >
                  Projects Created
                </span>
                <span className="font-semibold">12</span>
              </div>

              <div className="flex justify-between items-center">
                <span
                  className={clsx(
                    theme === "light" && "text-gray-600",
                    theme === "dark" && "text-gray-300"
                  )}
                >
                  Tasks Completed
                </span>
                <span className="font-semibold">89</span>
              </div>

              <div className="flex justify-between items-center">
                <span
                  className={clsx(
                    theme === "light" && "text-gray-600",
                    theme === "dark" && "text-gray-300"
                  )}
                >
                  Account Status
                </span>
                <span className="text-green-500 font-semibold">Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 hover:scale-[1.02]">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
