"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink() {
  const pathname = usePathname();

  return (
    <div className="flex space-x-2">
      <Link
        href="/"
        className={`text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 ${
          pathname === "/" ? "bg-gray-900" : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/courses"
        className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
          pathname === "/courses" ? "bg-gray-900" : ""
        }`}
      >
        Courses
      </Link>
      <Link
        href="/newcourse"
        className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
          pathname === "/newcourse" ? "bg-gray-900" : ""
        }`}
      >
       Request Course
      </Link>
      <Link
        href="/support-tickets"
        className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
          pathname === "/support-tickets" ? "bg-gray-900" : ""
        }`}
      >
        Support Tickets
      </Link>
      <Link
        href="/applyinstructor"
        className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
          pathname === "/applyinstructor" ? "bg-gray-900" : ""
        }`}
      >
       Apply Instructor
      </Link>
      <Link
        href="/categories"
        className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
          pathname === "/categories" ? "bg-gray-900" : ""
        }`}
      >
        Categories
      </Link>
      <Link
        href="/dashboard"
        className={`text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
          pathname === "/dashboard" ? "bg-gray-900" : ""
        }`}
      >
        Dashboard
      </Link>
    </div>
  );
}
