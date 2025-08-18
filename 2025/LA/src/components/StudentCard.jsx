import React from "react";

export default function StudentCard({ student }) {
  if (!student) {
    return (
      <div className="p-4 border rounded-lg bg-white shadow mt-6">
        <p className="text-gray-600">No student found.</p>
      </div>
    );
  }

  return (
    <div className="p-4 border rounded-lg bg-white shadow mt-6">
      <h2 className="text-xl font-semibold mb-2">{student.name}</h2>
      <p className="text-sm text-gray-600">ID: {student.id}</p>
      {student.grade && (
        <p className="mt-2">
          <span className="font-medium">Grade:</span> {student.grade}
        </p>
      )}
    </div>
  );
}
