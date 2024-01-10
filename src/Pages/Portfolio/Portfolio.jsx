import { FaLaptopCode } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuCode } from "react-icons/lu";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import SectiionTitle from "../../Component/SectiionTitle/SectiionTitle";
import bistroBoss from "../../assets/bistro-boss.png";
import giniusCar from "../../assets/genius-car.png";
import developSkill from "../../assets/develop-skill.png";
import docCare from "../../assets/doc-care.png";

const Portfolio = () => {
  return (
    <div className="mt-10 mb-20">
      <SectiionTitle heading="portfolio" subHeading="projects" />

      <div className="mt-24 grid sm:grid-cols-1 lg:grid-cols-3 gap-6 justify-center align-middle">
        <div className="card w-96 bg-[#1c222a]">
          <figure className=" pt-4">
            <img src={bistroBoss} alt="" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white font-bold uppercase">
              Bistro Boss
            </h2>
            <p className="font-semibold text-white text-[18px] mt-2 leading-6">
              .React.React-Router-Dom.NodeJS.Express.MongoDB.-Style-Component.
              Fetch.Axios
            </p>
            <div className="card-actions mt-8">
              <a href="http://localhost:5174/" target="_blank">
                <FaArrowUpRightFromSquare className="text-white text-3xl" />
              </a>
              <a href="https://github.com/Sharif-Miah/bistro-boss-clint-site" target="_blank">
              <FaGithub className="text-white text-3xl mx-6" /></a>
              <a href="https://github.com/Sharif-Miah/bistro-boss-server-site" target="_blank">
              <FaGithub className="text-white text-3xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-[#1c222a]">
          <figure className=" pt-4">
            <img src={giniusCar} alt="" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white font-bold uppercase">
              Ginius Car
            </h2>
            <p className="font-semibold text-white text-[18px] mt-2 leading-6">
              .React.React-Router-Dom.NodeJS.Express.MongoDB.-Style-Component.
              Fetch.Axios
            </p>
            <div className="card-actions mt-8">
              <a href="https://genius-car-3c6f8.web.app/" target="_blank">
                <FaArrowUpRightFromSquare className="text-white text-3xl" />
              </a>
              <a href="https://github.com/Sharif-Miah/geniusCar-client-site" target="_blank">
              <FaGithub className="text-white text-3xl mx-6" /></a>
              <a href="https://github.com/Sharif-Miah/geniusCar-server-site" target="_blank">
              <FaGithub className="text-white text-3xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-[#1c222a]">
          <figure className=" pt-4">
            <img src={developSkill} alt="" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-white font-bold uppercase">
              Develop Skill
            </h2>
            <p className="font-semibold text-white text-[18px] mt-2 leading-6">
              .React.React-Router-Dom.NodeJS.Express.MongoDB.-Style-Component.
              Fetch.Axios
            </p>
            <div className="card-actions mt-8">
              <a href="https://kaleidoscopic-sundae-e7a993.netlify.app/course" target="_blank">
                <FaArrowUpRightFromSquare className="text-white text-3xl" />
              </a>
              <a href="https://github.com/Sharif-Miah/Develop-skill-client-site-repo" target="_blank">
              <FaGithub className="text-white text-3xl mx-6" /></a>
              <a href="https://github.com/Sharif-Miah/Develop-skill-server-site-repo" target="_blank">
              <FaGithub className="text-white text-3xl" />
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;
