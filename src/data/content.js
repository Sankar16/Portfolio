import tcslogo from "../assets/images/tcslogo.png";
import eduvancelogo from "../assets/images/eduvancelogo.png";
import raitlogo from "../assets/images/raitlogo.jpg";
import ncsulogo from "../assets/images/ncsulogo.jpg";

export const aboutData = {
    heading: "About Me",
    description: "I am an AI/ML enthusiast passionate about Data Science, Machine Learning, and Data Engineering. I strive to develop intelligent systems that leverage AI to solve real-world challenges and create innovative solutions."
};
  
export const skillsData = [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Power BI", logo: "https://github.com/microsoft/PowerBI-Icons/blob/main/PNG/Power-BI.png?raw=true" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "MLOps", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/MLops_logo.svg" },
    { name: "Apache Spark", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" }
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
      image: raitlogo,
      university: "Mumbai University - D. Y. Patil Ramrao Adik Institute of Technology",
      course: "Bachelor of Engineering in Information Technology",
      duration: "2016 - 2020",
      description: "Focused on Software Engineering, Data Science, and Machine Learning."
    }
];
  
export const projectsData = [
    {
    name: "Research Paper Summarizer", 
    link: "https://github.com/Sankar16/research_paper_summarizer"
    },
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
      company: "Children's Hospital of Philadelphia",
      role: "Data Science Intern",
      duration: "July 2025 – Present",
      description: "Working on building machine learning models and streamlining data workflows to support clinical research."
    },
    {
      image: tcslogo,
      company: "Tata Consultancy Services",
      role: "Data Engineer",
      duration: "Aug 2020 – Jul 2024",
      description: "As a Data Engineer at TCS, I worked extensively within the **Banking domain**, where I played a key role in migrating **legacy core banking systems** for the **Canadian Imperial Bank of Commerce (CIBC)** to **Azure Cloud infrastructure**, enhancing performance, scalability, and reducing batch processing time by over 25%. I designed and implemented scalable **ETL pipelines** for a multi-currency system using **PySpark** and **Azure Data Factory** to integrate real-time FX rate feeds, enabling seamless cross-currency transactions and improving transaction processing time by 30%. Additionally, I performed **Exploratory Data Analysis (EDA)** on over 5M cross-currency transactions, identifying patterns in FX usage clusters and processing delays. This analysis informed routing logic optimization, which improved the on-time transaction completion rate by 12%. In addition, I developed **Natural Language Processing (NLP)** components for legal document analysis, including **information retrieval** and **key-phrase extraction**, and fine-tuned **BERT** to extract key data points, reducing false positives by 3× compared to spaCy rule-based methods."
    },
    {
      image: eduvancelogo,
      company: "Eduvance Pvt. Ltd.",
      role: "Machine Learning Intern",
      duration: "May 2019 – Jul 2019",
      description: "Worked on developing Deep Learning models for image processing and enhancement using SRCNN for super-resolution."
    }
];
  
export const researchData = [
    {
    title: "LLM's to Evaluate and Improve Comments", 
    publisher: "Independent Study Project", 
    date: "Ongoing", 
    description: "Researching the application of Large Language Models (LLMs) to enhance code commenting for better clarity and insight.",
    },  
    {
      title: "Classification of Disease using CBC",
      publisher: "Springer Artificial Intelligence and Soft Computing series",
      date: "Jan 2020 – May 2020",
      link: "https://link.springer.com/chapter/10.1007/978-981-16-1249-7_12"
    } 
];