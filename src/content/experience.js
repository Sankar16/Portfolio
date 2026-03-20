const experience = [
  {
    company: 'Tata Consultancy Services',
    role: 'Data Scientist II',
    duration: 'Aug 2022 – Jul 2024',
    description:
      'Led production-oriented machine learning and data platform workflows across cloud migration, document intelligence, and ML lifecycle automation.',
    bullets: [
      'Replatformed 40+ IBM i batch pipelines to Azure Databricks with event-driven ADF orchestration, reducing failures by 80% and cutting issue detection time to under 5 minutes.',
      'Delivered a GPT-based invoice extraction pipeline for 1,000+ documents with schema validation, consistency checks, and 95% precision / 87% recall across extracted fields.',
      'Implemented ML release gates, experiment tracking, and CI/CD checks using MLflow, GitHub Actions, and Azure DevOps to improve model quality and deployment confidence.',
    ],
    tools: [
      'PySpark',
      'Azure Databricks',
      'ADF',
      'MLflow',
      'GPT',
      'GitHub Actions',
      'Azure DevOps',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Data Scientist',
    duration: 'Jul 2020 – Jul 2022',
    description:
      'Worked on data engineering, analytical data products, and machine learning-driven document and transaction workflows in enterprise banking environments.',
    bullets: [
      'Engineered scalable data models for 10M+ daily financial transactions and translated complex banking rules into standardized analytical datasets.',
      'Built ETL and data quality workflows to support downstream analytics, reporting, and decision-making across multi-currency transaction systems.',
      'Contributed to ML-oriented document processing and OCR-related workflows while strengthening data pipeline reliability and cloud migration readiness.',
    ],
    tools: [
      'Python',
      'SQL',
      'Azure',
      'ETL',
      'Data Modeling',
      'Analytics',
      'OCR',
    ],
  },
  {
    company: "Children's Hospital of Philadelphia",
    role: 'Data Science Intern',
    duration: 'Jul 2025 – Present',
    description:
      'Developed a rigorous genomic ML workflow for pediatric disease classification using high-dimensional DNA methylation data.',
    bullets: [
      'Built a leakage-safe multiclass ML pipeline from raw input through preprocessing, feature reduction, and clinical evaluation reporting.',
      'Applied statistical filtering, PCA, nested cross-validation, and SVM modeling to support robust generalization and reproducible results.',
      'Reduced preprocessing effort substantially while supporting strong precision and recall on held-out validation data.',
    ],
    tools: [
      'Python',
      'Scikit-learn',
      'SVM',
      'PCA',
      'Bioinformatics',
      'Statistics',
      'Genomics',
    ],
  },
  {
    company: 'North Carolina State University',
    role: 'Graduate Research Intern',
    duration: 'Aug 2025 – Present',
    description:
      'Worked on LLM-driven code comment generation and evaluation workflows focused on improving comment quality and developer usefulness.',
    bullets: [
      'Designed a system for generating new comments and improving weak existing comments using structured prompts and evaluation logic.',
      'Built an automated evaluation pipeline with custom metrics to assess usefulness, clarity, and intent alignment.',
      'Used research-style evaluation design to translate model outputs into a measurable developer productivity story.',
    ],
    tools: [
      'Python',
      'LLMs',
      'NLP',
      'Evaluation',
      'Tree-sitter',
      'Prompt Engineering',
    ],
  },
];

export default experience;