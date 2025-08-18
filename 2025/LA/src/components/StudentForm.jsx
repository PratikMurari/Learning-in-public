import React, { useState } from "react";

export default function StudentForm({ setStudent, setLoading }) {
  const [studentId, setStudentId] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      // Basic demo: fetch from public/students.json and pick by id
      const response = await fetch("students.json");
      const allStudents = await response.json();
      const found = allStudents.find((s) => String(s.id) === String(studentId));
      setStudent(found || null);
    } catch (error) {
      console.error("Failed to load students.json", error);
      setStudent(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow mt-6"
    >
      <label className="block text-sm font-medium mb-2" htmlFor="studentId">
        Student ID
      </label>
      <input
        id="studentId"
        type="text"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        placeholder="Enter student id (e.g. 1)"
        className="w-full border rounded px-3 py-2 mb-3"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Lookup
      </button>
    </form>
  );
}
