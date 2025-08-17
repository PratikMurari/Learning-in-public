import React, { useState } from "react";
import Header from "../components/Header";
import StudentForm from "../components/StudentForm";
import StudentCard from "../components/StudentCard";
import SkeletonLoader from "../components/SkeletonLoader";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState(null);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-xl mx-auto p-6">
        <StudentForm setStudent={setStudent} setLoading={setLoading} />
        {loading ? (
          <SkeletonLoader />
        ) : (
          student && <StudentCard student={student} />
        )}
      </main>
    </div>
  );
}
