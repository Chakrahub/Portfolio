const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>
        <div className="flex flex-col md:flex-col gap-10">
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              MERN Chat-Bot
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Developed a MERN-based Chat-Bot with an interactive frontend using HTML, CSS, JavaScript, Bootstrap, and React. Integrated Socket.IO to enable real-time, bidirectional communication between users and the server. Designed a robust backend with database support for storing and managing user details, ensuring smooth, persistent, and responsive conversations
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
          <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">Academic Project</h1>
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Underground Cable Fault Detection
            </h1>
            <p className="text-lg text-gray-700 mb-4">
             Designed an Underground Cable Fault Detection System combining MATLAB/Simulink simulation and Arduino/ESP8266 hardware prototype. Simulated L-G, L-L, L-L-G, and L-L-L-G faults, analyzing voltage/current variations and isolation logic with relays. Implemented hardware with sensors, relays, LCD display, and cloud integration to detect, isolate, and monitor faults in real time.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-col gap-10">
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">Wireless Display System</h1>
            <p className="text-lg text-gray-700 mb-4">
            Developed a Wireless Display System using an Arduino board and Bluetooth module to transmit data wirelessly. Designed the system to receive input and display real-time data on a screen, enabling efficient short-range communication without wired connections.</p>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Project;
