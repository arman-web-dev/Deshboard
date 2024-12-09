import React from "react";

const AboutAdminPanel = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">About Section Admin Panel</h1>

      {/* About Content Management */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl font-semibold mb-4">Edit About Section</h2>
        <form>
          {/* Title */}
          <div className="mb-6">
            <label className="block font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter title (e.g., I Can Design Anything You Want)"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block font-medium text-gray-700 mb-2">Description</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter about me description"
            ></textarea>
          </div>

          {/* Stats Management */}
          <div className="mb-6">
            <label className="block font-medium text-gray-700 mb-2">Stats</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Stat #1 - Value
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter stat value (e.g., 350+)"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Stat #1 - Label
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter stat label (e.g., Complete Projects)"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Stat #2 - Value
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter stat value (e.g., 16+)"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Stat #2 - Label
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter stat label (e.g., Years of Experience)"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <label className="block font-medium text-gray-700 mb-2">Features</label>
            <div className="space-y-4">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Feature #1 (e.g., Work simple and clean design)"
              />
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Feature #2 (e.g., Responsive design)"
              />
              {/* Add more features as needed */}
            </div>
          </div>

          {/* Button Management */}
          <div className="mb-6">
            <label className="block font-medium text-gray-700 mb-2">Download Button Text</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Enter button text (e.g., Download My CV)"
            />
          </div>

          {/* Image Upload */}
          <div className="mb-6">
            <label className="block font-medium text-gray-700 mb-2">Hero Image</label>
            <input
              type="file"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Submit Button */}
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutAdminPanel;
