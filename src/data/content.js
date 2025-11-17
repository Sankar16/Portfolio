import tcslogo from "../assets/images/tcslogo.png";
import eduvancelogo from "../assets/images/eduvancelogo.png";
import raitlogo from "../assets/images/raitlogo.jpg";
import ncsulogo from "../assets/images/ncsulogo.jpg";
import choplogo from "../assets/images/choplogo.jpeg";

export const aboutData = {
    heading: "About Me",
    description: "I am an AI/ML enthusiast passionate about Data Science, Machine Learning, and Data Engineering. I strive to develop intelligent systems that leverage AI to solve real-world challenges and create innovative solutions."
};
 /* 
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
    { name: "Apache Spark", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" }
];
 */

export const skillsData = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn-original.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },

  // NLP / LLM
  { name: "Hugging Face", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
  { name: "LangChain", logo: "https://raw.githubusercontent.com/hwchase17/langchain/master/docs/static/img/favicon.ico" },

  // Cloud & Data Engineering
  { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Apache Spark", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
  { name: "Databricks", logo: "https://seeklogo.com/images/D/databricks-logo-0D1E4F8D05-seeklogo.com.png" },

  // DevOps & Tools
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "CI/CD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },

  // Visualization
  { name: "Power BI", logo: "https://github.com/microsoft/PowerBI-Icons/blob/main/PNG/Power-BI.png?raw=true" },
  { name: "Tableau", logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" }
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
      image: choplogo,
      company: "Children's Hospital of Philadelphia",
      role: "Data Science Intern",
      duration: "July 2025 – Present",
      description: "Engineered end-to-end Azure ML pipelines for processing 1M+ DNA probe genomic data, applying statistical and ML models to identify key syndrome predictors with 100% recall and ROC-AUC. Automated preprocessing and data standardization workflows, cutting manual tasks by 75%, ensuring reproducible outcomes. Translated insights from 20+ research papers into production-ready Python workflows, reducing analytical turnaround by 50%. Collaborated with cross-functional teams to integrate clinical data, boosting model accuracy and predictive reliability by 25%."
    },
    {
      image: tcslogo,
      company: "Tata Consultancy Services",
      role: "Machine Learning Engineer",
      duration: "Aug 2020 – Jul 2024",
      description: "Spearheaded migration of core banking systems to Azure Cloud, automating data workflows and reducing downtime by 30%. Build and deployed of GPT-3.5 Turbo–based field extractor for 1,000+ invoices, automating extraction of financial entities (GST, tax, date, amount) with 95% precision and 87% recall. Applied prompt engineering and benchmarking against traditional NER models, delivering a 70% accuracy improvement and reducing manual verification efforts. Mentored 7 junior engineers, standardizing Agile-based ML workflows and improving code quality by 20%."
    },
    {
      image: tcslogo,
      company: "Tata Consultancy Services",
      role: "System Engineer",
      duration: "Aug 2020 – Jul 2024",
      description: "Designed and implemented a computer vision model integrated with a Flask RESTful API to detect screen elements using OCR and icons, achieving 92% accuracy and optimized performance through threading implementation. Architected ETL pipelines integrating real-time FX rate updates via Azure Data Factory and Spark, improving transaction efficiency by 2x across international operations. Implemented CI/CD automation with Azure DevOps, reducing release cycles by 40% and improving deployment consistency. Defined and validated transformation logic with technical teams to ensure lossless, high-quality data exchange across systems."
    },
    {
      image: eduvancelogo,
      company: "Eduvance Pvt. Ltd.",
      role: "Machine Learning Intern",
      duration: "May 2019 – Jul 2019",
      description: "Designed and optimized a deep learning SRCNN model, boosting image resolution and pixel clarity by 50%. Increased neural network training throughput on HPC clusters by 40% through distributed computing efficiency improvements."
    }
];
  
export const researchData = [
    {
    title: "LLM's to Evaluate and Improve Comments", 
    publisher: "Independent Study Project", 
    date: "Ongoing", 
    description: "Researching the application of Large Language Models (LLMs) to enhance code commenting for better clarity and insight making onboarding easier.",
    },  
    {
      title: "Classification of Disease using CBC",
      publisher: "Springer Artificial Intelligence and Soft Computing series",
      date: "Jan 2020 – May 2020",
      link: "https://link.springer.com/chapter/10.1007/978-981-16-1249-7_12"
    } 
];