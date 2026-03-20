const projects = [
  {
    slug: 'causallab',
    title: 'CausalLab',
    featured: true,
    category: 'Experimentation / Analytics Platform',
    summary:
      'Full-stack platform for reviewing randomized A/B test datasets with diagnostics, treatment-effect estimation, safe cleanup, trust-aware reporting, and LLM-generated stakeholder summaries.',
    whyItMatters:
      'Separates statistical significance from experiment trustworthiness so teams can make better product decisions.',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'FastAPI',
      'Python',
      'pandas',
      'NumPy',
      'SciPy',
      'statsmodels',
      'OpenAI',
    ],
    githubUrl: 'https://github.com/Sankar16/CausalLab',
    demoUrl: 'https://causal-lab.vercel.app',
    overview:
      'CausalLab is an experimentation review and treatment-effect analysis platform for randomized A/B test datasets. It helps users validate mapping, run diagnostics, estimate lift, review trust signals, and generate stakeholder-ready summaries.',
    problem:
      'Teams often focus only on p-values and lift even when the underlying experiment is flawed. That can lead to decisions based on statistically significant but unreliable results.',
    built: [
      'Dataset ingestion, schema profiling, and treatment/outcome/covariate mapping flow.',
      'Safe cleanup pipeline with automatic re-checking after fixes.',
      'Experiment diagnostics including SRM detection, missing-outcome checks, and group balance review.',
      'Binary and continuous outcome analysis with optional covariate adjustment.',
      'Trust-aware reporting with LLM-generated executive summaries and reliability notes.',
    ],
    approach: [
      'Separated effect estimation from experiment trustworthiness.',
      'Supported both unadjusted and covariate-adjusted analysis paths.',
      'Used intentionally flawed synthetic datasets to stress-test the trust layer.',
    ],
    outcomes: [
      'Built an end-to-end experimentation review platform with frontend, backend, and reporting flow.',
      'Demonstrated the distinction between statistically significant and decision-ready results.',
      'Created a strong full-stack DS/ML product showcasing statistics, data quality, and LLM reporting.',
    ],
    learnings: [
      'Trust-aware analysis is often more useful than raw significance alone.',
      'Good experimentation tooling needs both statistical rigor and user-friendly reporting.',
    ],
  },
  {
    slug: 'candidate-recommendation-system',
    title: 'Candidate Recommendation System',
    featured: true,
    category: 'AI / NLP / Retrieval',
    summary:
      'Resume-to-job matching system that extracts structured fields from resumes and job descriptions, generates embeddings, and ranks candidates with reasoning.',
    whyItMatters:
      'Combines information extraction, vector search, and ranking logic for a practical recruiting workflow.',
    stack: [
      'Python',
      'Streamlit',
      'LLaMA3',
      'Hugging Face API',
      'Sentence Transformers',
      'FAISS',
      'pdfplumber',
      'python-docx',
    ],
    githubUrl: 'https://github.com/Sankar16/Job-Candidate-Recommendation-System/tree/main',
    demoUrl: 'https://drive.google.com/file/d/1LR1LYkmmYKAvBK8xwwRoID7J77LIfBof/view?usp=sharing',
    overview:
      'A web app that recommends candidates for a job description by extracting structured resume fields, creating embeddings, and ranking fit across experience, skills, education, and other criteria.',
    problem:
      'Full-text matching across resumes and job descriptions is inconsistent because resume formats vary heavily. Structured field-based comparison provides more stable and explainable ranking.',
    built: [
      'Multi-format resume ingestion for PDF, DOCX, DOC, and TXT workflows.',
      'LLM-based field extraction from resumes and job descriptions.',
      'Embedding generation and FAISS-based similarity search.',
      'Candidate scoring and reasoning module for match explanation.',
    ],
    approach: [
      'Used structured field extraction instead of weak full-text matching.',
      'Compared semantically similar fields like job title vs experience and skills vs experience.',
      'Used vector similarity for efficient ranking across multiple candidates.',
    ],
    outcomes: [
      'Created a recruiter-facing recommendation workflow with explainable ranking.',
      'Showcased applied NLP, embedding search, and ranking logic in one system.',
      'Built a strong end-to-end project for AI/ML and Data Science roles.',
    ],
    learnings: [
      'Field-level matching is much more robust than naive full-text comparison.',
      'Ranking systems benefit from structured reasoning, not just similarity scores.',
    ],
  },
  {
    slug: 'predictive-fault-detection-cnc',
    title: 'Predictive Fault Detection in CNC Milling Machines',
    featured: true,
    category: 'Machine Learning / Predictive Maintenance',
    summary:
      'End-to-end classification pipeline for predicting CNC milling machine failures and identifying failure modes from sensor data.',
    whyItMatters:
      'Demonstrates practical ML for industrial reliability, class imbalance handling, and interpretable maintenance insights.',
    stack: [
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Scikit-learn',
      'XGBoost',
      'SMOTE',
      'GridSearchCV',
    ],
    githubUrl: 'https://github.com/Sankar16/Predictive-Fault-Detection-for-CNC-Milling',
    demoUrl: '',
    overview:
      'This project predicts machine failures before they occur by modeling sensor and wear data from CNC milling machine operations.',
    problem:
      'Unexpected breakdowns in aerospace manufacturing create downtime, cost overruns, and operational risk. The goal was to classify both failures and failure types from historical machine data.',
    built: [
      'EDA pipeline to identify important sensor relationships and thresholds.',
      'Feature engineering for power overload and overstrain patterns.',
      'Classification workflows using Logistic Regression, Random Forest, KNN, SVM, and XGBoost.',
      'SMOTE-based handling of class imbalance with hyperparameter tuning.',
    ],
    approach: [
      'Benchmarked multiple models using precision, recall, F1, and ROC-AUC.',
      'Focused on minority-class recall improvement for rare failure cases.',
      'Designed the system around proactive maintenance rather than reactive reporting.',
    ],
    outcomes: [
      'Best Random Forest + SMOTE model reached 98.2% accuracy.',
      'Improved minority-class recall significantly.',
      'Identified practical failure triggers like torque × wear and thermal margin drops.',
    ],
    learnings: [
      'In predictive maintenance, recall on rare failure cases matters more than headline accuracy.',
      'Feature engineering can make industrial ML outputs much more interpretable.',
    ],
  },
  {
    slug: 'jobcruncher-job-analyzer',
    title: 'JobCruncher / Job Analyzer',
    featured: true,
    category: 'Full-Stack / Search Platform',
    summary:
      'Job search and filtering platform with resume analysis, bookmarking, scraping workflows, notifications, and deployment-oriented architecture.',
    whyItMatters:
      'Shows backend, search, security, scraping, deployment, and product workflow design in one system.',
    stack: [
      'Python',
      'Flask',
      'MongoDB',
      'Selenium',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Testing',
    ],
    githubUrl: 'https://github.com/Sankar16/Job-Analyzer',
    demoUrl: 'https://www.youtube.com/watch?v=H823ocClZ-k',
    overview:
      'A lightweight platform for searching and filtering job postings, analyzing resumes, and helping users track relevant opportunities with a user-friendly workflow.',
    problem:
      'Students and job seekers spend too much time filtering and repeatedly searching through job portals. The goal was to reduce that friction with a focused search and resume workflow.',
    built: [
      'Job search and filtering system by title, location, company, and skills.',
      'Resume analysis features including ATS-style review.',
      'Bookmarking, notifications, and 2FA-enhanced account workflows.',
      'Scalability-focused deployment design using Docker, Kubernetes, and load balancing concepts.',
    ],
    approach: [
      'Combined scraping, filtering, and user account workflows in one product.',
      'Expanded from basic job search into resume analysis and notifications.',
      'Treated deployment and scalability as part of the system design story.',
    ],
    outcomes: [
      'Built a richer full-stack project with real product depth and backend architecture thinking.',
      'Added security, deployment, and scaling concepts beyond a standard Flask CRUD app.',
      'Created a strong software + data product portfolio piece.',
    ],
    learnings: [
      'User value often comes from workflow simplification, not just raw features.',
      'Scalability and deployment thinking can strengthen even student product projects.',
    ],
  },
  {
    slug: 'burnout-calorie-tracker',
    title: 'BurnOut',
    featured: false,
    category: 'Full-Stack / Health App',
    summary:
      'Calorie tracking and fitness application for monitoring intake, workout burn, goals, progress, friends, and wellness programs.',
    whyItMatters:
      'Demonstrates full-stack product development with user workflows, analytics, authentication, and feature evolution.',
    stack: [
      'Python',
      'MongoDB',
      'HTML',
      'CSS',
      'Docker',
      'Kubernetes',
      'OpenAI',
      '2FA',
    ],
    githubUrl: 'https://github.com/anuj672/calorieApp_server',
    demoUrl: 'https://www.youtube.com/watch?v=kXsI3x8_JAY',
    overview:
      'BurnOut is a calorie and fitness tracking app that helps users monitor intake, workouts, goals, plans, and social interactions.',
    problem:
      'Users need a lightweight way to track calories in/out, set goals, and review progress over time.',
    built: [
      'Profile, intake, workout, and history flows.',
      'Goal tracking with calorie recommendations and visualization.',
      'Friend connections, email sharing, and program enrollment.',
      'Feature upgrades like 2FA, charts, Dockerization, and Kubernetes deployment.',
    ],
    approach: [
      'Built around practical user tracking workflows.',
      'Expanded from a simple tracking app into a more feature-rich wellness platform.',
    ],
    outcomes: [
      'Created a user-facing full-stack application with social, security, and analytics features.',
      'Strengthened experience with end-to-end app design and product iteration.',
    ],
    learnings: [
      'Even simple lifestyle products benefit from structured user flows and analytics.',
      'Incremental product evolution makes a project much stronger than a static MVP.',
    ],
  },
  {
    slug: 'research-paper-summarizer',
    title: 'Research Paper Summarizer',
    featured: false,
    category: 'AI / NLP / Summarization',
    summary:
      'Streamlit app that searches arXiv, downloads PDFs, chunks long papers, generates structured summaries, and formats citations.',
    whyItMatters:
      'Shows practical document processing, summarization pipelines, chunking strategy, and citation generation.',
    stack: [
      'Python',
      'Streamlit',
      'arXiv API',
      'OpenAI-compatible API',
      'PDF Processing',
      'Chunking',
      'Summarization',
    ],
    githubUrl: 'https://github.com/Sankar16/research_paper_summarizer',
    demoUrl: '',
    overview:
      'A paper search and summarization app that finds arXiv papers, extracts text, chunks content, and produces section-wise bullet summaries plus citations.',
    problem:
      'Research papers are lengthy and difficult to review quickly. The goal was to make them easier to understand without losing structure.',
    built: [
      'arXiv search and metadata retrieval.',
      'PDF download and text extraction pipeline.',
      'Chunking logic to stay within token limits.',
      'Structured summarization and citation generation flow.',
    ],
    approach: [
      'Used chunk-level summarization followed by merged structured output.',
      'Handled cases where full PDF text was unavailable by falling back to abstract summarization.',
    ],
    outcomes: [
      'Built a practical research assistant workflow for technical literature review.',
      'Created a strong example of document processing plus LLM summarization.',
    ],
    learnings: [
      'Chunking strategy is essential when summarizing long technical documents.',
      'Structured output makes AI summaries much more usable.',
    ],
  },
];

export default projects;