


import axios from "axios";
import HeroArea from "../components/HeroArea";
import AllnewCourse from "../components/NewCourse/AllnewCourse";

export default async function Allnewcourse() {
 


  return (
    <>
      <HeroArea
        title="Review Course Request : Admin Panel"
        description="Welcome to the Admin Panel for adding new courses! Here, administrators can create and manage courses to enrich our platform's offerings. From course title to category and description, input all the necessary details to provide learners with engaging content. Let's expand our course."
      />
      <div className="container mx-auto">
        <div className="flex flex-row">
          <div className="basis-3/12 pr-10">
            <div className="py-16">
              <AllnewCourse />
              
            </div>
          </div>
          <div className="basis-9/12">
          {/* <div className="py-16 flex flex-wrap">
             <SlidePicture />
             
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
