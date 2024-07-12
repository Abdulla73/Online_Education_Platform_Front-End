"use client";

import { useEffect, useState } from "react";
import CourseItem from "./CourseItem";

function CourseList({ term, categoryId, type, fetchCourses }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCourses = async () => {
      try {
        setLoading(true);
        const data = await fetchCourses();
        setCourses(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getCourses();
  }, [term, categoryId, type, fetchCourses]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return courses.map((course) => (
    <CourseItem key={course.id} course={course} />
  ));
}
