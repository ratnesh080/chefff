import { useState } from "react";
import { X } from "lucide-react";

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Button to open cart */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow"
      >
        Open Cart
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Empty Cart Content */}
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M9 21h6"
              />
            </svg>
          </div>
          <p className="text-gray-500">Your cart is empty</p>
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg"
          >
            Browse Products
          </button>
        </div>
      </div>
    </div>
  );
}
