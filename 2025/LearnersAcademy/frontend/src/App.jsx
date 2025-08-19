import { useState } from "react";
import axios from "axios";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

export default function App() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);
    if (!name.trim() || !id.trim()) {
      setError("Please enter both Name and Student ID.");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/lookup", { name, id });
      setResult(res.data);
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-pink-50">
      <div className="w-[22rem] rounded-2xl bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-center gap-2">
          <AcademicCapIcon className="h-8 w-8 text-pink-500" />
          <h1 className="text-2xl font-semibold text-pink-600">Learner’s Academy</h1>
        </div>

        <form onSubmit={onSubmit} className="space-y-3">
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm text-gray-700">Child’s Full Name</label>
            <input
              id="name"
              autoComplete="name"
              className="w-full rounded-lg border px-3 py-2 outline-none ring-pink-400 focus:ring-2"
              placeholder="e.g., John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="id" className="text-sm text-gray-700">Student ID</label>
            <input
              id="id"
              className="w-full rounded-lg border px-3 py-2 outline-none ring-pink-400 focus:ring-2"
              placeholder="e.g., A12345"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-pink-500 py-2 font-medium text-white transition hover:bg-pink-600 active:scale-[0.99]"
        >
          Lookup
        </button>
        </form>

        {error && <p className="mt-3 text-center text-sm text-red-600">{error}</p>}
        {result && (
          <div className="mt-4 rounded-lg bg-pink-100 p-3 text-sm">
            <div className="flex justify-between"><span className="text-gray-600">Name</span><span className="font-medium">{result.name}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Class</span><span className="font-medium">{result.class}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Status</span><span className="font-medium">{result.enrollmentStatus}</span></div>
          </div>
        )}
      </div>
    </div>
  );
}
