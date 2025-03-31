import React from "react";

const skills = [
  "Python",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "TensorFlow",
  "Scikit-learn",
  "React JS",
  "Android Jetpack",
  "Selenium",
  "Arduino",
  "Raspberry Pi",
];

export const Skills = () => {
  return (
    <section className="p-8 bg-black">
      <h2 className="text-[#32a6ff] font-sans font-medium text-[1.1rem] z-[5] mb-2">
        SKILLS
      </h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-full bg-[#29292c] px-3 py-1 text-sm font-medium text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
