import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div id="home" className="bg-[#FFFFFF]">
      <div className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center  min-h-screen">
        <div className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            I’m <span className="text-[#fe5617]">Chakravarthi</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold flex gap-2">
            <span className="text-[#fe5617]">I’m a</span>
            <Typewriter
              options={{
                strings: [
                  "Developer.",
                  "Designer.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-medium">
           A passionate web developer with expertise in the MERN stack and a B.Tech in Electrical and Electronics Engineering. Skilled in creating responsive, secure, and user-friendly applications, I bring strong problem-solving abilities and adaptability to new technologies.
          </p>

          <div className=" flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-6 text-lg md:text-xl font-semibold ">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#fe5617]" size={20} />
              <span>Pondicherry</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#fe5617]" size={20} />
              <span>8072215679</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#fe5617]" size={20} />
              <span>chakrakarthi024@gmail.com</span>
            </div>
          </div>
          <div className="bg-[#fe5617] px-5 py-2 rounded-2xl font-bold ">
            <a href="/Chakra-bio.pdf" download={"Resume"}>Download CV</a>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-end items-center">
          <img
            className="w-[100%] rounded-[400px] "
            src="/profile.jpeg"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
