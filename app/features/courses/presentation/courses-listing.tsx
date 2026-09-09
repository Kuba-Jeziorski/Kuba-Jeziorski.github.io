import { courses } from "../data/courses";
import CoursesItem from "./courses-item";

export default function CoursesListing() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
      {courses.map((course) => (
        <CoursesItem key={course.name} course={course} />
      ))}
    </div>
  );
}
