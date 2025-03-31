// import logo from "../assets/logo.png";
import profilePic from "../assets/profile.png";

export const Hero = () => {
  return (
    <section className="bg-black text-white">
      {/* Logo */}
      {/* <div className="p-6">
        <img src={logo} alt="Logo" className="w-24 h-24 rounded-full" />
      </div> */}
      {/* Hero Content */}
      <div className="mx-auto w-full  px-4 flex flex-col md:flex-row items-start md:items-center">
        {/* Left Column: Text */}
        <div className="md:w-full md:max-w-2xl flex flex-col items-start text-center md:text-left p-6">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-[#32a6ff]">Aiman </span>
          </h1>
          {/* <p className="text-xl mb-6">
          Computer Science Graduate | AI Researcher | Full-Stack Developer
          </p> */}
          {/* 
          <h2 className="text-2xl font-semibold mb-2 text-[#32a6ff]">ABOUT</h2> */}
          <p className="mb-6">
            I have experience in{" "}
            <span className="underline">Artificial Intelligence</span> research,{" "}
            <span className="underline">Big data analytics</span>, and{" "}
            <span className="underline">Full-stack development</span>. I built
            an <span className="underline">Artificial Intelligence</span>
            -powered educational tool, optimized{" "}
            <span className="underline">MRI data workflows</span>, and led
            innovative projects as the{" "}
            <span className="underline">Founder and Ex-President</span> of The{" "}
            <span className="underline">AI Club</span> at California State
            University San Marcos. I am seeking opportunities in{" "}
            <span className="underline">Big data analytics</span> or{" "}
            <span className="underline">Full-stack development</span>.
          </p>
        </div>

        {/* Right Column: Profile Image */}
        <div className=" md:w-2/5 flex justify-center ">
          <img
            src={profilePic}
            alt="Profile"
            className="w-47 h-47 rounded-full center object-cover hover:scale-120  duration-300 "
          />
        </div>
      </div>
    </section>
  );
};
