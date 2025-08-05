import { useState } from "react";
import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function Help() {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const faqData = [
    {
      id: 1,
      category: "account",
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking on 'Forgot Password' on the login page and following the instructions sent to your email."
    },
    {
      id: 2,
      category: "account",
      question: "How do I change my email address?",
      answer: "Go to Profile settings and update your email address. You'll need to verify the new email address."
    },
    {
      id: 3,
      category: "features",
      question: "How do I switch between light and dark themes?",
      answer: "You can toggle between themes using the theme button in the header or through the Settings page."
    },
    {
      id: 4,
      category: "features",
      question: "What features are available in the dashboard?",
      answer: "The dashboard provides an overview of your activity, quick access to main features, and customizable widgets."
    },
    {
      id: 5,
      category: "troubleshooting",
      question: "The app is running slowly, what should I do?",
      answer: "Try refreshing the page, clearing your browser cache, or checking your internet connection. If the issue persists, contact support."
    },
    {
      id: 6,
      category: "troubleshooting",
      question: "I'm getting error messages, how can I fix them?",
      answer: "Note down the exact error message and try refreshing the page. If the error continues, contact our support team with the error details."
    }
  ];

  const categories = [
    { id: "all", name: "All Topics" },
    { id: "account", name: "Account" },
    { id: "features", name: "Features" },
    { id: "troubleshooting", name: "Troubleshooting" }
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Help Center</h1>
          <p
            className={clsx(
              "text-lg",
              theme === "light" && "text-gray-600",
              theme === "dark" && "text-gray-300"
            )}
          >
            Find answers to frequently asked questions and get support
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={clsx(
                "w-full px-4 py-3 pl-12 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300",
                theme === "light" && "bg-white border-gray-300 text-gray-800",
                theme === "dark" && "bg-gray-700 border-gray-600 text-white"
              )}
            />
            <svg
              className={clsx(
                "absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5",
                theme === "light" && "text-gray-400",
                theme === "dark" && "text-gray-500"
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={clsx(
                  "px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105",
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : clsx(
                        "border",
                        theme === "light" && "border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
                        theme === "dark" && "border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-600"
                      )
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          
          {filteredFAQs.length === 0 ? (
            <div
              className={clsx(
                "text-center py-8",
                theme === "light" && "text-gray-500",
                theme === "dark" && "text-gray-400"
              )}
            >
              No help topics found matching your search.
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className={clsx(
                    "p-6 rounded-lg border transition-colors duration-300",
                    theme === "light" && "bg-white border-gray-200",
                    theme === "dark" && "bg-gray-700 border-gray-600"
                  )}
                >
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p
                    className={clsx(
                      theme === "light" && "text-gray-600",
                      theme === "dark" && "text-gray-300"
                    )}
                  >
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact Support */}
        <div
          className={clsx(
            "p-6 rounded-lg border text-center",
            theme === "light" && "bg-blue-50 border-blue-200",
            theme === "dark" && "bg-blue-900 border-blue-700"
          )}
        >
          <h3 className="text-xl font-semibold mb-2">Still need help?</h3>
          <p
            className={clsx(
              "mb-4",
              theme === "light" && "text-gray-600",
              theme === "dark" && "text-gray-300"
            )}
          >
            Can't find what you're looking for? Our support team is here to help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 hover:scale-[1.02]"
            >
              Contact Support
            </button>
            
            <button
              className={clsx(
                "px-6 py-3 rounded-lg font-medium border transition-all duration-200 hover:scale-[1.02]",
                theme === "light" && "border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
                theme === "dark" && "border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-600"
              )}
            >
              Send Feedback
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="#"
              className={clsx(
                "p-4 rounded-lg border text-center transition-all duration-200 hover:scale-105 block",
                theme === "light" && "bg-white border-gray-200 hover:bg-gray-50",
                theme === "dark" && "bg-gray-700 border-gray-600 hover:bg-gray-600"
              )}
            >
              <div className="text-2xl mb-2">📚</div>
              <div className="font-medium">User Guide</div>
            </a>
            
            <a
              href="#"
              className={clsx(
                "p-4 rounded-lg border text-center transition-all duration-200 hover:scale-105 block",
                theme === "light" && "bg-white border-gray-200 hover:bg-gray-50",
                theme === "dark" && "bg-gray-700 border-gray-600 hover:bg-gray-600"
              )}
            >
              <div className="text-2xl mb-2">🎥</div>
              <div className="font-medium">Video Tutorials</div>
            </a>
            
            <a
              href="#"
              className={clsx(
                "p-4 rounded-lg border text-center transition-all duration-200 hover:scale-105 block",
                theme === "light" && "bg-white border-gray-200 hover:bg-gray-50",
                theme === "dark" && "bg-gray-700 border-gray-600 hover:bg-gray-600"
              )}
            >
              <div className="text-2xl mb-2">🔧</div>
              <div className="font-medium">API Documentation</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
