import React from "react";
import SectiionTitle from "../../../Component/SectiionTitle/SectiionTitle";
import national from "../../../assets/national.jpg";
import govtCollege from "../../../assets/narsingdiGovtCollege.png"
import school from "../../../assets/bonaid.jpg"
const Education = () => {
  return (
    <div className="mb-12">
      <SectiionTitle heading="education" />
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 mt-8">
        <div className="my-6 mx-auto">
          <div className="flex">
            <div>
              <img src={national} alt="" className="w-16" />
            </div>
            <div className="mt-5 text-white ml-6">
              <h5>Bachelor Of Business Administration (At present) </h5>
              <p>-from Madhabdi University of Dhaka</p>
            </div>
          </div>
        </div>
        <div className="my-6 mx-auto">
          <div className="flex">
            <div>
              <img src={govtCollege} alt="" className="w-16" />
            </div>
            <div className="mt-5 text-white ml-6">
              <h5>Higher Secondary Certificate in Business</h5>
              <p>-from Narsingdi Govt. College</p>
            </div>
          </div>
        </div>
        <div className="my-6 mx-auto ">
          <div className="flex">
            <div>
              <img src={school} alt="" className="w-16" />
            </div>
            <div className="mt-5 text-white ml-6">
              <h5>Bonaid Babu Miah High School</h5>
              <p>-from Secondary School Certificate in Business</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
