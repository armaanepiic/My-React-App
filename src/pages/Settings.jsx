import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

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
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p
            className={clsx(
              "text-lg",
              theme === "light" && "text-gray-600",
              theme === "dark" && "text-gray-300"
            )}
          >
            Customize your application preferences
          </p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-8">
          {/* Appearance Settings */}
          <div
            className={clsx(
              "p-6 rounded-lg border",
              theme === "light" && "bg-white border-gray-200",
              theme === "dark" && "bg-gray-700 border-gray-600"
            )}
          >
            <h2 className="text-2xl font-semibold mb-4">Appearance</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Theme</h3>
                  <p
                    className={clsx(
                      "text-sm",
                      theme === "light" && "text-gray-600",
                      theme === "dark" && "text-gray-300"
                    )}
                  >
                    Choose between light and dark mode
                  </p>
                </div>
                <button
                  onClick={toggleTheme}
                  className={clsx(
                    "px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105",
                    theme === "light" && "bg-gray-800 text-white hover:bg-gray-700",
                    theme === "dark" && "bg-white text-gray-800 hover:bg-gray-300"
                  )}
                >
                  {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Language</h3>
                  <p
                    className={clsx(
                      "text-sm",
                      theme === "light" && "text-gray-600",
                      theme === "dark" && "text-gray-300"
                    )}
                  >
                    Select your preferred language
                  </p>
                </div>
                <select
                  className={clsx(
                    "px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500",
                    theme === "light" && "bg-white border-gray-300 text-gray-800",
                    theme === "dark" && "bg-gray-600 border-gray-500 text-white"
                  )}
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div
            className={clsx(
              "p-6 rounded-lg border",
              theme === "light" && "bg-white border-gray-200",
              theme === "dark" && "bg-gray-700 border-gray-600"
            )}
          >
            <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Email Notifications</h3>
                  <p
                    className={clsx(
                      "text-sm",
                      theme === "light" && "text-gray-600",
                      theme === "dark" && "text-gray-300"
                    )}
                  >
                    Receive updates via email
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Push Notifications</h3>
                  <p
                    className={clsx(
                      "text-sm",
                      theme === "light" && "text-gray-600",
                      theme === "dark" && "text-gray-300"
                    )}
                  >
                    Receive push notifications
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Weekly Summary</h3>
                  <p
                    className={clsx(
                      "text-sm",
                      theme === "light" && "text-gray-600",
                      theme === "dark" && "text-gray-300"
                    )}
                  >
                    Receive weekly activity summary
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Privacy & Security */}
          <div
            className={clsx(
              "p-6 rounded-lg border",
              theme === "light" && "bg-white border-gray-200",
              theme === "dark" && "bg-gray-700 border-gray-600"
            )}
          >
            <h2 className="text-2xl font-semibold mb-4">Privacy & Security</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Two-Factor Authentication</h3>
                  <p
                    className={clsx(
                      "text-sm",
                      theme === "light" && "text-gray-600",
                      theme === "dark" && "text-gray-300"
                    )}
                  >
                    Add an extra layer of security
                  </p>
                </div>
                <button
                  className={clsx(
                    "px-4 py-2 rounded-lg font-medium border transition-all duration-200 hover:scale-105",
                    theme === "light" && "border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
                    theme === "dark" && "border-gray-600 bg-gray-600 text-gray-300 hover:bg-gray-500"
                  )}
                >
                  Enable
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Profile Visibility</h3>
                  <p
                    className={clsx(
                      "text-sm",
                      theme === "light" && "text-gray-600",
                      theme === "dark" && "text-gray-300"
                    )}
                  >
                    Control who can see your profile
                  </p>
                </div>
                <select
                  className={clsx(
                    "px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500",
                    theme === "light" && "bg-white border-gray-300 text-gray-800",
                    theme === "dark" && "bg-gray-600 border-gray-500 text-white"
                  )}
                >
                  <option>Public</option>
                  <option>Friends Only</option>
                  <option>Private</option>
                </select>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div
            className={clsx(
              "p-6 rounded-lg border border-red-300",
              theme === "light" && "bg-red-50",
              theme === "dark" && "bg-red-900/20"
            )}
          >
            <h2 className="text-2xl font-semibold text-red-600 mb-4">Danger Zone</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-red-600">Delete Account</h3>
                  <p
                    className={clsx(
                      "text-sm",
                      theme === "light" && "text-red-500",
                      theme === "dark" && "text-red-400"
                    )}
                  >
                    Permanently delete your account and all data
                  </p>
                </div>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all duration-200 hover:scale-105">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 hover:scale-[1.02]"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
