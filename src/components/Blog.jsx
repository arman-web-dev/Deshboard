import React from 'react'

const Blog = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
    {/* Panel Header */}
    <h1 className="text-3xl font-bold mb-6 text-gray-800">Blog Admin Panel</h1>

    {/* Blog Form Section */}
    <div className="bg-white p-6 rounded-lg shadow-md mb-10">
      <h2 className="text-2xl font-semibold mb-4">Add New Blog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Date Field */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Date</label>
          <input
            type="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Select a date"
          />
        </div>

        {/* Title Field */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Title</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter blog title"
          />
        </div>

        {/* Description Field */}
        <div className="col-span-2">
          <label className="block font-medium text-gray-700 mb-2">Description</label>
          <textarea
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter blog description"
          ></textarea>
        </div>

        {/* Link Field */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Link</label>
          <input
            type="url"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter blog link"
          />
        </div>

        {/* Image Upload Field */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Image</label>
          <input
            type="file"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Add Blog Button */}
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-md">
        Add Blog
      </button>
    </div>

    {/* Blog List Section */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Blog List</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Link</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Image</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">20 Jan, 2023</td>
            <td className="border border-gray-300 px-4 py-2">Sample Blog Title</td>
            <td className="border border-gray-300 px-4 py-2">
              This is a brief description of the blog...
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <a
                href="#"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </td>
            <td className="border border-gray-300 px-4 py-2">Image.jpg</td>
            <td className="border border-gray-300 px-4 py-2">
              <button className="text-red-600 hover:underline">Delete</button>
            </td>
          </tr>
          {/* Add more rows as necessary */}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Blog
