import tcslogo from "../assets/images/tcslogo.png";
import eduvancelogo from "../assets/images/eduvancelogo.png";
import raitlogo from "../assets/images/raitlogo.jpg";
import ncsulogo from "../assets/images/ncsulogo.jpg";

export const aboutData = {
    heading: "About Me",
    description: "I am an AI/ML enthusiast passionate about Data Science and Machine Learning."
  };
  
  export const skillsData = [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },  // Updated AWS logo
    { name: "Power BI", logo: "https://github.com/microsoft/PowerBI-Icons/blob/main/PNG/Power-BI.png?raw=true://seeklogo.com/images/P/power-bi-logo-2B2F4715A6-seeklogo.com.png" } // Updated Power BI logo
];
  
  export const educationData = [
    {
      image: ncsulogo,
      university: "North Carolina State University",
      course: "Master of Computer Science",
      duration: "2024 - 2026",
      description: "Specializing in Data Science, Machine Learning, and Data Engineering."
    },
    {
      image: raitlogo, // Mumbai University Logo
      university: "Mumbai University - D. Y. Patil Ramrao Adik Institute of Technology",
      course: "Bachelor of Engineering in Information Technology",
      duration: "2016 - 2020",
      description: "Focused on Software Engineering and Data Science."
    }
  ];

  export const projectsData = [
    { 
        name: "Predictive Fault Detection in CNC Milling Machines",
        link: "https://github.com/Sankar16/Predictive-Fault-Detection-for-CNC-Milling"
    },
    { 
      name: "PORTFOLIO",
      link: "https://github.com/Sankar16/Portfolio"
    },
    { 
      name: "Stock Market Analysis EDA",
      link: "https://github.com/Sankar16/Stock_Market_Analysis_EDA"
    },
    { 
      name: "METAFIT - AI-driven Fitness Tracker",
      link: "https://github.com/Sankar16/calorieApp_server"
    },
    { 
      name: "NASA Close Approach Analysis",
      link: "https://github.com/Sankar16/NASA-Close-Approach-Analysis"
    },
    { 
        name: "Job Analyzer",
        link: "https://github.com/Sankar16/Job-Analyzer"
    },
    { 
        name: "Classification of Diseases using Machine Learning",
        link: "https://github.com/Sankar16/Classification-of-Diseases"
    },
    { 
        name: "COVID Warrior",
        link: "https://github.com/Sankar16/Covid_Yoddha_Portal"
    }

  ];
  
  export const experienceData = [
    {
      image: tcslogo,
      company: "Tata Consultancy Services",
      role: "System Engineer",
      duration: "Aug 2021 – Jul 2024",
      description: "Led fraud detection ML model development, Azure cloud migrations, and real-time ETL processing."
    },
    {
      image: tcslogo,
      company: "Tata Consultancy Services",
      role: "Assistant System Engineer",
      duration: "Aug 2020 – Jul 2021",
      description: "Automated data quality assessments and improved online banking multi-currency functionalities."
    },
    {
      image: eduvancelogo,
      company: "Eduvance Pvt. Ltd.",
      role: "Machine Learning Intern",
      duration: "May 2019 – Jul 2019",
      description: "Developed Deep Learning-based SRCNN models for AI-driven image super-resolution."
    }
  ];
  
  export const researchData = [
    {
      title: "Classification of Disease using CBC",
      publisher: "Springer Artificial Intelligence and Soft Computing series",
      date: "Jan 2020 – May 2020",
      link: "https://link.springer.com/chapter/10.1007/978-981-16-1249-7_12"
    }
  ];
  