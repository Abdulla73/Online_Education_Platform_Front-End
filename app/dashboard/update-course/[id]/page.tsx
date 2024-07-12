import UpdateCourse from "@/app/components/CoursePage/UpdateCourse";

export default function SingleCourse({ params }) {
  const { id } = params;

  return (
    <div>
      <UpdateCourse id={id} />
    </div>
  );
}
