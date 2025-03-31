import { useState } from "react";

export function Experience() {
  const customCommandMap = {
    "Laboratory Technician": `Palomar College
September 2024 - Present, San Marcos, CA

- Developed an AI-powered educational tool using ReactJS, Tailwind CSS, and OpenAI API, reducing professor workload by 50% by automating guided learning assistance.
- Enabled professors to focus more on lectures, improving in-class engagement by 80%, while students used the tool for independent essay writing and homework assistance.
- Reduced students’ reliance on full AI-generated answers, instead guiding them toward structured responses, leading to a 25% improvement in writing skills and comprehension.`,

    "Research Assistant": `California State University San Marcos
August 2024 - Present, San Marcos, CA

- Extracted over 300 radiomic features from MRI scans using PyRadiomics, enabling detailed texture, shape, and intensity-based analysis for glioma grade classification.
- Implemented SMOTE for class balancing, enhancing model robustness and reducing bias toward high-grade glioma by 30%.
- Optimized dataset preparation and processing workflows, reducing training time by 40% while maintaining high accuracy in glioma classification.`,

    "Team Lead": `Treobytes
August 2019 - January 2023, San Diego, CA

- Designed engaging computer science and robotics curricula incorporating Python, Scratch, CodeCombat, and Arduino programming.
- Provided guidance in debugging code, troubleshooting circuits, and optimizing logic to develop computational thinking and problem-solving skills.
- Directed a team of instructors in delivering 150+ STEM education classes, enhancing student engagement by 25% through the development of interactive learning modules and collaborative projects.
- Cultivated a collaborative environment by mentoring 5+ instructors, leading to a 30% increase in team efficiency and successfully implementing innovative teaching methodologies across multiple STEM programs.`
  };

  function ScriptCopyBtn({ showMultiplePackageOptions = true, commandMap, className }) {
    const packageManagers = Object.keys(commandMap);
    const [packageManager, setPackageManager] = useState(packageManagers[0]);
    const command = commandMap[packageManager];

    const [title, dateLocation, ...rest] = command.split("\n");
    const bulletPoints = rest
      .join("\n")
      .split("- ")
      .map((point) => point.trim())
      .filter((point) => point);

    return (
      <div className={`mx-auto flex w-auto items-center justify-center ${className || ""}`}>
        <div className="notification w-full">
          <div className="notititle">EXPERIENCE</div>
          <div className="mb-2 flex items-center px-5">
            {showMultiplePackageOptions && (
              <div className="relative">
                <div className="inline-flex overflow-hidden text-xs">
                  {packageManagers.map((pm, index) => (
                    <div key={pm} className="flex items-center">
                      {index > 0 && (
                        <div className="h-5 w-px bg-gray-600" aria-hidden="true" />
                      )}
                      <button
                        className={`relative px-3 py-1 text-sm hover:bg-gray-200 ${
                          packageManager === pm ? "text-white" : "text-white"
                        }`}
                        onClick={() => setPackageManager(pm)}
                      >
                        {pm}
                        {packageManager === pm && (
                          <div className="absolute inset-x-0 bottom-0 mx-auto h-0.5 w-[50%] bg-blue-500" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="notibody font-sans text-[15px] leading-relaxed space-y-2 w-[860px]">
            <div className="text-[#fffb00] font-semibold ">{title}</div>
            <div className="text-gray-300 text-sm italic ">{dateLocation}</div>
            <ul className="list-disc list-inside text-white notibody">
              {bulletPoints.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ScriptCopyBtn
      showMultiplePackageOptions={true}
      commandMap={customCommandMap}
    />
  );
}
