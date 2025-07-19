import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Experiences } from "@/constants";

const Experience = () => {
  return (
    <div className="z-[20] flex flex-col items-center justify-center text-white">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Work Experience
      </h1>

      <Timeline
        position="alternate"
        sx={{ display: "flex", overflowX: "auto", padding: 0 }}
      >
        {Experiences.map((experience, index) => (
          <TimelineItem
            key={index}
            sx={{ minWidth: "300px", flex: "1 1 auto" }}
          >
            <TimelineSeparator>
              <TimelineDot className="bg-teal-500" color="inherit" />
              {index < Experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent>
              <div className="text-center px-4">
                <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-400">
                  {experience.title}
                </h2>
                <h3 className="text-lg text-gray-300">{experience.company}</h3>
                <p className="text-sm text-gray-400 mb-2">
                  {experience.duration}
                </p>

                {/* Show accordion on small screens */}
                <div className="block sm:hidden">
                  <Accordion
                    sx={{
                      backgroundColor: "inherit",
                      color: "white",
                      border: "1px solid rgba(165, 243, 252, 0.9)",
                      borderRadius: "4px",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ChevronDownIcon className="w-4 text-white" />
                      }
                    >
                      <span className="flex justify-between items-center w-full">
                        <p className="text-sm text-gray-300">View Details</p>
                      </span>
                    </AccordionSummary>
                    <AccordionDetails>
                      {experience.description
                        .trim()
                        .split("\n")
                        .map((line, idx) => (
                          <p key={idx} className="text-sm">
                            {line}
                          </p>
                        ))}
                    </AccordionDetails>
                  </Accordion>
                </div>

                {/* Show description normally on medium and larger screens */}
                <ul className="list-disc list-inside text-sm space-y-3">
                  {experience.description
                    .trim()
                    .split("\n")
                    .map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                </ul>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Experience;
