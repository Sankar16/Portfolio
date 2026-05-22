const experience = [
  {
    company: 'North Carolina State University',
    role: 'Graduate Research Intern',
    duration: 'Sept 2025 – May 2026',
    description:
      'Built retrieval-augmented generation systems for automated code documentation, combining corpus-level semantic retrieval with intra-file call graph context.',
    bullets: [
      'Built a two-phase RAG pipeline for code documentation: retrieves intent-matched examples from an open-source corpus, then enriches context with related methods from the same codebase via call graph to generate grounded comments.',
      'Labeled 7,976 code-comment pairs by quality and intent using LLaMA-3-8B; validated against human annotations (Kappa 0.81) to ensure corpus reliability before experiments.',
      'Intent-matched retrieval preferred by evaluators 92.2% of the time; combined pipeline with call graph context improved comment quality 90% across readability, accuracy, and grounding. Accepted at Frontiers in Education 2026.',
    ],
    tools: [
      'Python',
      'LLMs',
      'RAG',
      'LLaMA-3',
      'OpenAI API',
      'Tree-sitter',
      'Embeddings',
      'Call Graph',
      'Prompt Engineering',
    ],
  },
  {
    company: "Children's Hospital of Philadelphia",
    role: 'Data Science Intern',
    duration: 'Jun 2025 – Dec 2025',
    description:
      'Rebuilt a genomic ML pipeline for rare pediatric disease classification, fixing data leakage and replacing an ill-suited modeling approach that had compromised clinical trust in results.',
    bullets: [
      'Rebuilt genomic classification pipeline for Genetic Syndrome (~200 patients, 850K+ methylation features), fixing data leakage and replacing an ill-suited ML approach that had inflated performance estimates.',
      'Designed nested cross-validation (5-fold outer, 3-fold inner) with all preprocessing scoped strictly inside each training fold, producing unbiased performance estimates the clinical team could trust.',
      'Trained LinearSVC achieving 98-99% precision and 100% recall; adopted as lab standard by clinical researchers at CHOP.',
    ],
    tools: [
      'Python',
      'Scikit-learn',
      'LinearSVC',
      'PCA',
      'BH Feature Selection',
      'Nested CV',
      'Bioinformatics',
      'Statistics',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Machine Learning Engineer II',
    duration: 'Aug 2022 – Jul 2024',
    description:
      'Led production ML and data platform workflows across cloud migration, document intelligence, and ML lifecycle automation for enterprise banking clients.',
    bullets: [
      'Built async LLM pipeline for extracting structured fields from 1,000+ weekly invoices; validated extractions using edit distance against pre-labeled data and embedding similarity to catch field assignment errors, achieving 95% precision.',
      'Reduced processing time 10x (50 to 5 minutes) and human review from 100% to 5% via confidence-based routing, replacing a rule-based template system that broke silently on new formats.',
      'Designed reference MLOps architecture across 40+ pipelines on Azure Databricks with ML-specific CI/CD gates (schema validation, quality thresholds, drift detection), reducing pipeline failures by 80% and deployment cycles by 40%.',
      'Set up automated drift detection via Azure Monitor with under 5-minute alerting and MLflow model registry for versioned promotion, enabling auditable deployments across all environments.',
    ],
    tools: [
      'Python',
      'GPT-3.5',
      'asyncio',
      'Azure Databricks',
      'MLflow',
      'GitHub Actions',
      'Azure DevOps',
      'Azure Monitor',
      'Docker',
      'Kubernetes',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Machine Learning Engineer',
    duration: 'Aug 2020 – Jul 2022',
    description:
      'Worked on real-time ML systems, data engineering, and ML lifecycle tooling for enterprise banking environments.',
    bullets: [
      'Built real-time FX anomaly detection using Isolation Forest on Spark Structured Streaming, enabling unsupervised transaction monitoring across multiple currency pairs without labeled fraud data.',
      'Diagnosed and resolved production partition skew (USD/EUR at 80% volume) via composite key repartitioning, increasing throughput 25% and eliminating stale-data incidents.',
      'Introduced MLflow tracking and model versioning as the team\'s first standardized release process, bringing consistency and auditability to model deployments.',
    ],
    tools: [
      'Python',
      'PySpark',
      'Spark Structured Streaming',
      'Isolation Forest',
      'MLflow',
      'Azure',
      'SQL',
    ],
  },
];

export default experience;