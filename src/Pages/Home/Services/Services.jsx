import React from "react";
import SectiionTitle from "../../../Component/SectiionTitle/SectiionTitle";
import { FaLaptopCode } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuCode } from "react-icons/lu";
import { LiaLaptopCodeSolid } from "react-icons/lia";

const Services = () => {
  return (
    <div className="mt-10 mb-20">
      <SectiionTitle heading="What I Do" subHeading="my Services" />

      <div className="mt-24 grid sm:grid-cols-1 lg:grid-cols-3 gap-6 justify-center align-middle">

        <div className="card w-96 bg-[#1c222a]">
          <figure className=" pt-4">
          <FaLaptopCode  className="text-[#f5b711] text-[80px]"/>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white font-bold uppercase">FRONT-END DEVELOPER</h2>
            <p className="uppercase text-white text-[13px] mt-2 leading-6">I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction.</p>
            <div className="card-actions">
              <Link className="flex">
              <button className="text-[#f5b711]">Contact Me</button>
              <IoIosArrowRoundForward className="text-[#f5b711] text-3xl"/>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-[#1c222a]">
          <figure className=" pt-4">
          <LuCode className="text-[#f5b711] text-[80px]"/>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white font-bold uppercase">BACK-END DEVELOPER</h2>
            <p className="uppercase text-white text-[13px] mt-2 leading-6">I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction.</p>
            <div className="card-actions">
              <Link className="flex">
              <button className="text-[#f5b711]">Contact Me</button>
              <IoIosArrowRoundForward className="text-[#f5b711] text-3xl"/>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-[#1c222a]">
          <figure className=" pt-4">
          <LiaLaptopCodeSolid  className="text-[#f5b711] text-[80px]"/>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white font-bold uppercase">FULLSTACK DEVELOPER</h2>
            <p className="uppercase text-white text-[13px] mt-2 leading-6">I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction.</p>
            <div className="card-actions">
              <Link className="flex">
              <button className="text-[#f5b711]">Contact Me</button>
              <IoIosArrowRoundForward className="text-[#f5b711] text-3xl"/>
              </Link>
            </div>
          </div>
        </div>





      </div>
    </div>
  );
};

export default Services;
