



import HeroArea from "../components/HeroArea";
import CreateReview from "../components/ReviewCourse/CreateReview";
import SidePic from "../components/ReviewCourse/SidePic";

import ViewReview from "../components/ReviewCourse/ViewReview";

export default function Reviewcourse() {
  return (
    <>
      <HeroArea
        title="Teach with Us: Apply to be an Instructor"
        description="Apply to become an instructor on our platform! We're looking for passionate individuals like you to teach and inspire learners worldwide. Show us what you know, and help shape the future of online education. Apply now and start making a difference!."
      />
      <div className="container mx-auto">
        <div className="flex flex-row">
          <div className="basis-3/12 pr-10">
            <div className="py-16">
              <CreateReview /><br></br>
              <ViewReview />
            </div>
          </div>
          <div className="basis-9/12">
          <div className="py-16 flex flex-wrap">
             <SidePic />
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
