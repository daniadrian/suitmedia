import React, { useState } from "react";
import { useGetIdeas } from "../hooks/useGetIdeas";
import { useQueryClient } from "react-query";
import error_image from "../assets/error_image.jpg";
import banner_image from "../assets/banner_suit.png";

export const Ideas = () => {
  const queryClient = useQueryClient();

  // State untuk fitur "Show Per Page", "Sorting", dan "Pagination"
  const [perPage, setPerPage] = useState(
    () => localStorage.getItem("ideasPerPage") || 10
  );
  const [sortOrder, setSortOrder] = useState(
    () => localStorage.getItem("ideasSortOrder") || "newest"
  );
  const [page, setPage] = useState(
    () => parseInt(localStorage.getItem("ideasPage")) || 1
  );

  const { data, isLoading, isError } = useGetIdeas();

  // Data yang disortir dan dipaginasi
  const sortedData = data?.data?.sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.created_at) - new Date(a.created_at);
    }
    return new Date(a.created_at) - new Date(b.created_at);
  });

  const paginatedData = sortedData?.slice((page - 1) * perPage, page * perPage);

  // Event handler
  const handlePerPageChange = (e) => {
    const newPerPage = e.target.value;
    setPerPage(newPerPage);
    localStorage.setItem("ideasPerPage", newPerPage);
    setPage(1);
  };

  const handleSortOrderChange = (e) => {
    const newSortOrder = e.target.value;
    setSortOrder(newSortOrder);
    localStorage.setItem("ideasSortOrder", newSortOrder);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    localStorage.setItem("ideasPage", newPage);
  };

  const handleImageError = (event) => {
    event.target.src = error_image;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="p-6">

      {/* Show Per Page */}
      <div className="flex items-center gap-4 mb-6">
        <label htmlFor="perPage" className="font-medium">Show per page:</label>
        <select
          id="perPage"
          value={perPage}
          onChange={handlePerPageChange}
          className="border rounded p-2"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>

        {/* Sorting */}
        <label htmlFor="sortOrder" className="font-medium">Sort by:</label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={handleSortOrderChange}
          className="border rounded p-2"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {/* Ideas List */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {paginatedData?.map((idea) => (
          <div key={idea.id} className="border rounded-lg overflow-hidden shadow-md">
            <img
              src={idea.small_image[0]?.url || error_image}
              alt={idea.title}
              className="w-full h-48 object-cover"
              onError={handleImageError}
            />
            <div className="p-4">
              <h5 className="text-lg font-semibold mb-2">{idea.title}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 gap-2">
        {Array.from(
          { length: Math.ceil(sortedData.length / perPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded ${
                page === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};
