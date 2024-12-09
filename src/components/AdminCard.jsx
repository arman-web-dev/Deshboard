import React from "react";

const AdminCard = () => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      {/* Product Image */}
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Product"
          className="object-contain h-full"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Product Name
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Short description of the product. It can include key details such as
          size, category, or other highlights.
        </p>

        <div className="flex items-center justify-between">
          <span className="text-gray-800 font-bold text-lg">$99.99</span>
          <span className="text-gray-500 text-sm">Stock: 10</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between p-4 border-t">
        <button
          className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-md"
          onClick={() => alert("Added to Database")}
        >
          Add to Cart
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-md"
          onClick={() => alert("Removed from Database")}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default AdminCard;
