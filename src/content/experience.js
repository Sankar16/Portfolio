const experience = [
  {
    company: 'North Carolina State University',
    role: 'Graduate Research Intern',
    duration: 'Sept 2025 – May 2026',
    description:
      'Researched how retrieval quality affects LLM-generated code documentation. Built a two-phase RAG pipeline combining intent-matched cross-file retrieval with local call graph context, showing that the right examples matter more than model choice.',
    bullets: [
      'Extracted 7,976 method-comment pairs from 7 open-source Ruby repositories using Tree-sitter AST parsing, which identifies comment-method relationships through syntactic sibling nodes rather than text proximity, handling nested methods, multiline comments, and edge cases regex cannot.',
      'Labeled the corpus for usefulness and 5-class documentation intent (what, why, how-to-use, property, how-it-is-done) using LLaMA-3-8B with a heuristic pre-filter and repair pass; validated against human annotations achieving Kappa 0.81 and 96.5% intent accuracy, confirming corpus reliability before experiments.',
      'Phase 1: built intent-matched few-shot retrieval using cosine similarity over code embeddings from stratified intent sub-pools; validated on 90 test items showing intent-matched retrieval preferred 92.2% of the time over unfiltered retrieval (MOS 4.83 vs 3.87, Wilcoxon p < 0.001, Cohen d = 1.40). Accepted at Frontiers in Education 2026.',
      'Phase 2: augmented retrieval with local call graph context from the same repository (callers, callees, sibling methods); evaluated on 3 binary criteria (readability, semantic accuracy, contextual grounding) with 85% LLM-human agreement, showing combined pipeline preferred 90% of the time over few-shot alone.',
    ],
    tools: [
      'Python',
      'LLaMA-3-8B',
      'OpenAI API (GPT-4.1-mini)',
      'Tree-sitter',
      'RAG',
      'Embeddings',
      'Call Graph',
      'Prompt Engineering',
      'Statistical Evaluation',
    ],
  },
  {
    company: "Children's Hospital of Philadelphia",
    role: 'Data Science Intern',
    duration: 'Jun 2025 – Dec 2025',
    description:
      'Rebuilt a genomic ML pipeline for Cornelia de Lange Syndrome classification from scratch, resolving two compounding flaws in the prior system that had made its results clinically untrustworthy.',
    bullets: [
      'Identified two compounding problems in the inherited pipeline: the ML approach was ill-suited for the high-dimensional small-sample setting (~200 patients, 850K+ methylation features), and data leakage from preprocessing applied before splitting had inflated performance estimates the clinical team had been relying on.',
      'Redesigned preprocessing with KNN imputation to preserve class-specific methylation patterns (mean imputation would corrupt CdLS signal), Benjamini-Hochberg feature selection reducing 850K CpG features to ~200 meaningful ones with FDR control, and PCA with n_components tuned as a hyperparameter — all scoped strictly inside each training fold.',
      'Built custom nested cross-validation (5-fold outer for unbiased evaluation, 3-fold inner for hyperparameter tuning) ensuring no test patient information ever influenced preprocessing, feature selection, or model selection — producing genuinely unbiased performance estimates.',
      'Trained LinearSVC (chosen over tree-based models for its global hyperplane optimization across all 200 PCA components simultaneously, suited for high-dimensional small-sample settings) achieving 98-99% precision and 100% recall; pipeline adopted as lab standard by clinical researchers at CHOP.',
    ],
    tools: [
      'Python',
      'Scikit-learn',
      'LinearSVC',
      'KNN Imputation',
      'Benjamini-Hochberg',
      'PCA',
      'Nested Cross-Validation',
      'DNA Methylation',
      'Statistical Analysis',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Machine Learning Engineer II',
    duration: 'Aug 2022 – Jul 2024',
    description:
      'Led production ML and data platform workflows for enterprise banking clients across document intelligence, MLOps automation, and cloud migration.',
    bullets: [
      'Developed async GPT-3.5 pipeline (asyncio, Semaphore 50) for extracting 16-25 structured fields from 1,000+ weekly invoices across hundreds of vendors with diverse layouts; used structural few-shot examples (table, prose, scanned multilingual) at T=0 for deterministic extraction.',
      'Built two-layer validation: edit distance against 1,000 pre-labeled invoices with per-field thresholds (post-normalization) to catch value-level errors, and embedding similarity between source quote labels and field names to catch field assignment errors schema validation misses — achieving 95% precision.',
      'Replaced brittle rule-based template system with confidence-based three-tier routing (87% auto-accept, 8% rule-based fallback, 5% human review), cutting processing time 10x (50 to 5 minutes) and human review from 100% to 5%.',
      'Architected reference MLOps framework across 40+ IBM-I to Azure Databricks migrated pipelines with ML-specific CI/CD gates (schema validation, MLflow quality thresholds, versioned registry promotion, drift checks before staging), reducing pipeline failures by 80% and deployment cycles by 40%.',
      'Implemented automated drift detection via Azure Monitor (KS test for continuous features, Chi-squared for categorical) with under 5-minute alerting and MLflow versioned model registry, reducing issue detection from hours to under 5 minutes.',
    ],
    tools: [
      'Python',
      'GPT-3.5',
      'asyncio',
      'Azure Databricks',
      'PySpark',
      'MLflow',
      'GitHub Actions',
      'Azure DevOps',
      'Azure Monitor',
      'Docker',
      'Kubernetes',
      'Edit Distance',
      'Embeddings',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Machine Learning Engineer',
    duration: 'Aug 2020 – Jul 2022',
    description:
      'Built real-time ML systems and ML lifecycle tooling for enterprise banking environments, including anomaly detection, streaming infrastructure, and model deployment standards.',
    bullets: [
      'Deployed real-time FX anomaly detection using Isolation Forest on Spark Structured Streaming — chosen for unsupervised scoring without labeled fraud data — enabling continuous transaction monitoring across multiple currency pairs at high volume.',
      'Diagnosed critical production partition skew post-deployment: USD/EUR made up 80% of transactions, overwhelming one executor while others sat idle. Resolved with composite key repartitioning (currency pair + time bucket), increasing throughput 25% and eliminating stale-data incidents.',
      'Introduced MLflow experiment tracking and versioned model registry as the team\'s first standardized ML release process, establishing repeatable deployment standards that were later scaled across 40+ pipelines in the MLOps migration.',
    ],
    tools: [
      'Python',
      'PySpark',
      'Spark Structured Streaming',
      'Isolation Forest',
      'MLflow',
      'Azure',
      'SQL',
      'Spark UI',
    ],
  },
];

export default experience;