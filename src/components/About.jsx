import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaNode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiNextdotjs,
  SiNetlify,
  SiMongodb,
  SiSocketdotio,
  SiPostman,
  SiGraphql,
  SiRedux,
  SiJsonwebtokens,
  SiRender,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { IoLogoNpm, IoLogoVercel } from "react-icons/io5";

const About = () => {
  return (
    <div id="about" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          About Me
        </h1>

        <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
          I’m <span className="font-bold text-[#fe5617]">Chakravarthi</span>,
          an Innoverse-driven MERN stack developer skilled in building full-stack web applications using React, Node.js, Express, and MongoDB. My B.Tech in 
          <span className="font-bold text-[#fe5617]"> Electrical and Electronics Engineering</span> enhances my analytical and problem-solving skills, allowing me to approach projects with both technical depth and practical efficiency.
          I’m a Good and Quick learner.
        </p>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#fe5617] text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center space-y-2">
              <FaHtml5 size={40} className="text-[#e34c26]" />
              <span className="font-bold">HTML5</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaCss3Alt size={40} className="text-[#264de4]" />
              <span className="font-bold">CSS3</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaJsSquare size={40} className="text-[#f7df1e]" />
              <span className="font-bold">JavaScript</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiBootstrap size={40} className="text-[#563d7c]" />
              <span className="font-bold">Bootstrap</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaReact size={40} className="text-[#61dbfb]" />
              <span className="font-bold">React.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <IoLogoNpm size={40} className="text-[#CB3837]" />
              <span className="font-bold">NPM</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaNode size={40} className="text-[#68a063]" />
              <span className="font-bold">Node.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiExpress size={40} className="text-[#000000]" />
              <span className="font-bold">Express.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiMongodb size={40} className="text-[#47a248]" />
              <span className="font-bold">MongoDB</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiJsonwebtokens size={40} className="text-[#232F3E]" />
              <span className="font-bold">JWT</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaGitAlt size={40} className="text-[#f05032]" />
              <span className="font-bold">Git</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaGithub size={40} className="text-black" />
              <span className="font-bold">GitHub</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <DiVisualstudio size={40} className="text-[#0078d7]" />
              <span className="font-bold">VS Code</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiPostman size={40} className="text-orange" />
              <span className="font-bold">Postman</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiNetlify size={40} className="text-[#00d1b2]" />
              <span className="font-bold">Netlify</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaFigma size={40} className="text-[#F24E1E]" />
              <span className="font-bold">Figma</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
