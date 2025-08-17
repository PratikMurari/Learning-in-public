import React from "react";

export default function SkeletonLoader() {
  return (
    <div className="animate-pulse p-4 border rounded-lg bg-white shadow mt-6">
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
    </div>
  );
}
