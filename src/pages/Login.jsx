import { useState } from "react";
import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function Login() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    // Add your login logic here
  };

  return (
    <div
      className={clsx(
        "min-h-screen flex items-center justify-center px-4 transition-colors duration-300",
        theme === "light" && "bg-gray-50",
        theme === "dark" && "bg-gray-900"
      )}
    >
      <div
        className={clsx(
          "w-full max-w-md p-8 rounded-lg shadow-lg transition-colors duration-300",
          theme === "light" && "bg-white border border-gray-200",
          theme === "dark" && "bg-gray-800 border border-gray-700"
        )}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className={clsx(
              "text-3xl font-bold mb-2",
              theme === "light" && "text-gray-800",
              theme === "dark" && "text-white"
            )}
          >
            Welcome Back
          </h1>
          <p
            className={clsx(
              "text-sm",
              theme === "light" && "text-gray-600",
              theme === "dark" && "text-gray-300"
            )}
          >
            Sign in to your account to continue
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className={clsx(
                "block text-sm font-medium mb-2",
                theme === "light" && "text-gray-700",
                theme === "dark" && "text-gray-300"
              )}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={clsx(
                "w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300",
                theme === "light" && "bg-white border-gray-300 text-gray-800 focus:border-blue-500",
                theme === "dark" && "bg-gray-700 border-gray-600 text-white focus:border-blue-400"
              )}
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className={clsx(
                "block text-sm font-medium mb-2",
                theme === "light" && "text-gray-700",
                theme === "dark" && "text-gray-300"
              )}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className={clsx(
                "w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300",
                theme === "light" && "bg-white border-gray-300 text-gray-800 focus:border-blue-500",
                theme === "dark" && "bg-gray-700 border-gray-600 text-white focus:border-blue-400"
              )}
              placeholder="Enter your password"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember"
                className={clsx(
                  "ml-2 text-sm",
                  theme === "light" && "text-gray-600",
                  theme === "dark" && "text-gray-300"
                )}
              >
                Remember me
              </label>
            </div>
            <button
              type="button"
              className={clsx(
                "text-sm font-medium hover:underline transition-colors duration-200",
                theme === "light" && "text-blue-600 hover:text-blue-500",
                theme === "dark" && "text-blue-400 hover:text-blue-300"
              )}
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 hover:scale-[1.02]"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="mt-6">
          <div className="relative">
            <div
              className={clsx(
                "absolute inset-0 flex items-center",
                theme === "light" && "border-t border-gray-300",
                theme === "dark" && "border-t border-gray-600"
              )}
            >
              <div className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span
                className={clsx(
                  "px-2",
                  theme === "light" && "bg-white text-gray-500",
                  theme === "dark" && "bg-gray-800 text-gray-400"
                )}
              >
                Or continue with
              </span>
            </div>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            className={clsx(
              "w-full inline-flex justify-center py-2 px-4 border rounded-lg shadow-sm text-sm font-medium transition-all duration-200 hover:scale-[1.02]",
              theme === "light" && "border-gray-300 bg-white text-gray-500 hover:bg-gray-50",
              theme === "dark" && "border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-600"
            )}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google
          </button>
          <button
            type="button"
            className={clsx(
              "w-full inline-flex justify-center py-2 px-4 border rounded-lg shadow-sm text-sm font-medium transition-all duration-200 hover:scale-[1.02]",
              theme === "light" && "border-gray-300 bg-white text-gray-500 hover:bg-gray-50",
              theme === "dark" && "border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-600"
            )}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
            Facebook
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p
            className={clsx(
              "text-sm",
              theme === "light" && "text-gray-600",
              theme === "dark" && "text-gray-300"
            )}
          >
            Don't have an account?{" "}
            <button
              type="button"
              className={clsx(
                "font-medium hover:underline transition-colors duration-200",
                theme === "light" && "text-blue-600 hover:text-blue-500",
                theme === "dark" && "text-blue-400 hover:text-blue-300"
              )}
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}


// -------------------------------------------

// import { useState } from 'react';
// import { useNavigate } from 'react-router';

// export default function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically handle the login logic
//     console.log('Login attempted with:', formData);
//     // For demo purposes, navigate to home after form submission
//     navigate('/');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="email" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Sign in
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }