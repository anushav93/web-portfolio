export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    title: "Web Developer",
    company: "HGS Digital",
    location: "Chicago, IL",
    period: "2018 - Present",
    description: "Leading end-to-end development of enterprise communication solutions with Twilio integration and AWS serverless architecture.",
    achievements: [
      "Led an end-to-end Twilio project, overseeing architecture, development, testing, and production deployment for IVR flows and AWS serverless integration.",
      "Designed and built custom Twilio plugins using React, Redux, and AWS Lambda (Node.js), improving customer interaction efficiency.",
      "Created IVR flows for Twilio and Amazon Connect, enhancing automation and streamlining user experiences.",
      "Developed serverless web applications using React, Next.js, and Tailwind CSS, ensuring performance, scalability, and security.",
      "Built modern, accessible UI components with SASS/CSS, optimizing responsiveness across devices."
    ],
    tags: ["React", "Next.js", "AWS", "Twilio", "Amazon Connect", "Contentful", "Node.js"]
  },
  {
    title: "Web Developer",
    company: "Audentio",
    location: "Rockford, IL", 
    period: "2018",
    description: "Collaborated with cross-functional teams to build optimized web applications focused on user experience and performance.",
    achievements: [
      "Created custom form solutions in React, improving data collection and user experience.",
      "Collaborated with designers and backend engineers to build and optimize web applications for speed and usability."
    ],
    tags: ["React", "JavaScript", "SCSS"]
  }
];

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
}

export const education: Education[] = [
  {
    degree: "Master's in Computer Science",
    school: "Northern Illinois University",
    location: "Dekalb, IL",
    period: "2015 - 2017"
  },
  {
    degree: "Bachelor's in Computer Science", 
    school: "V.R. Siddhartha Engineering College",
    location: "Vijayawada, India",
    period: "2011 - 2015"
  }
];
