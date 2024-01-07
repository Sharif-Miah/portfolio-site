import React from "react";
import { Helmet } from "react-helmet-async";
import heroImg from "../../../assets/h1_hero-bg-removebg-preview.png";

const Hero = () => {
  return (
    <div className="py-28">
      <Helmet>
        <title>Sharif || Home</title>
      </Helmet>

      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2">
            <img src={heroImg} className="lg:ml-48 w-96" alt="" />
          </div>
          <div className="lg:w-1/2">
            <h4 className="text-[18px] font-bold text-white  uppercase">HELLO, MY NAME IS</h4>
            <h1 className="text-[60px] text-white font-bold">
              Sharif Miah
            </h1>
            <h4 className="text-[20px] font-bold text-[#f5b711] my-4 uppercase">I AM Web Developer</h4>
            <p className=" text-white text-[18px] mb-[36px] leading-10">
            From Dhaka, Bangladesh. I’m a Front End Web developer who is passionate about making  websites. I am good at ReactJS. I love to talk with you about your unique. 
            </p>
            <button className=" px-8 py-2 font-bold border rounded-3xl text-white bg-[#F3B90B] hover:bg-[#112] hover:border-[#F3B90B]hover:tranparent shadow-lg shadow-[#F3B90B]">
              Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
