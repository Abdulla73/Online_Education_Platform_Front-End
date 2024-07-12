import Image from "next/image";
import bg from "../public/bg.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center relative">
      <div className="z-10 relative flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-8">Welcome to Edu Mastery</h1>
        <p className="text-lg text-center mb-8">
          Empowering your learning journey with top-quality courses, insightful
          posts, and comprehensive categories.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/courses"
            className="text-blue-700 border border-blue-700 hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:border-blue-600 dark:hover:bg-blue-100 focus:outline-none dark:focus:ring-blue-800"
          >
            Courses
          </a>
          <a
            href="/AllPost"
            className="text-blue-700 border border-blue-700 hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:border-blue-600 dark:hover:bg-blue-100 focus:outline-none dark:focus:ring-blue-800"
          >
            Posts
          </a>
          <a
            href="/carts"
            className="text-blue-700 border border-blue-700 hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:border-blue-600 dark:hover:bg-blue-100 focus:outline-none dark:focus:ring-blue-800"
          >
            Carts
          </a>
          <a
            href="/ContractUs"
            className="text-blue-700 border border-blue-700 hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:border-blue-600 dark:hover:bg-blue-100 focus:outline-none dark:focus:ring-blue-800"
          >
            Contact Form
          </a>
          <a
            href="/categories"
            className="text-blue-700 border border-blue-700 hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:border-blue-600 dark:hover:bg-blue-100 focus:outline-none dark:focus:ring-blue-800"
          >
            Categories
          </a>
          <a
            href="/bookStore"
            className="text-blue-700 border border-blue-700 hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:border-blue-600 dark:hover:bg-blue-100 focus:outline-none dark:focus:ring-blue-800"
          >
            Book Store
          </a>
          <a
            href="/applyinstructor"
            className="text-blue-700 border border-blue-700 hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:border-blue-600 dark:hover:bg-blue-100 focus:outline-none dark:focus:ring-blue-800"
          >
            Want to be an Instructor? - Apply
          </a>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>
    </div>
  );
}
