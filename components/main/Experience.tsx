import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
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
              <TimelineDot color="primary" />
              {index < Experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent>
              <div className="text-center px-4">
                <h2 className="text-xl font-semibold">{experience.title}</h2>
                <h3 className="text-lg text-gray-300">{experience.company}</h3>
                <p className="text-sm text-gray-400">{experience.duration}</p>
                {/* Render bullet points on new lines */}
                <div className="mt-2">
                  {experience.description
                    .trim()
                    .split("\n")
                    .map((line, idx) => (
                      <p key={idx} className="text-sm">
                        {line}
                      </p>
                    ))}
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Experience;
