

import NewCourse from "../components/NewCourse/NewCourse";

import HeroArea from "../components/HeroArea";
import CourseCategory from "../components/NewCourse/CourseCategory";

export default function newcourse() {
  return (
    <>
      <HeroArea
        title="Custom Course Requests: Your Learning, Your Way"
        description="Welcome to our Course Request page! Here, you can ask for specific courses you want to take or suggest new topics for your need. Just fill out a short form with what you're interested in, and we'll do our best to make it happen. Let's work together to make your learning experience even better! "
      />
      <div className="container mx-auto">
        <div className="flex flex-row">
          <div className="basis-3/12 pr-10">
            <div className="py-16">
              <NewCourse />
              
            </div>
          </div>
          <div className="basis-9/12">
          {/* <div className="py-16 flex flex-wrap">
             <CourseCategory />
             
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
