import UpdateCategory from "@/app/components/CategoryPage/UpdateCategory";

export default function SingleCategory({ params }) {
  const { id } = params;

  return (
    <div>
      <UpdateCategory id={id} />
    </div>
  );
}
