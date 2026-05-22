const projects = [
  {
    slug: 'conversation-factory',
    title: 'Conversation Factory',
    featured: true,
    category: 'LLM / Synthetic Data / Multi-Agent',
    summary:
      'Automated pipeline that generates high-quality multi-turn tool-calling conversations for LLM supervised fine-tuning training at scale.',
    whyItMatters:
      'Existing synthetic datasets for tool-calling are repetitive and structurally invalid, teaching models wrong patterns. This pipeline enforces structural validity and quality at every layer.',
    stack: [
      'Python',
      'GPT-4.1-mini',
      'NetworkX',
      'asyncio',
      'Pydantic',
      'LangGraph',
      'ToolBench',
    ],
    githubUrl: 'https://github.com/Sankar16/conversation-factory',
    demoUrl: '',
    overview:
      'Generates synthetic multi-turn tool-calling conversations for LLM training using a directed tool graph to sample structurally valid chains and multi-agent orchestration with a 3-level quality system.',
    problem:
      'Training tool-calling LLMs requires high-quality multi-turn conversations at scale. Existing datasets are repetitive and structurally invalid — wrong argument types, hallucinated IDs, tools called in the wrong order — teaching models incorrect patterns from the start.',
    built: [
      'Directed tool graph with 4 edge types (operation rank, data-flow, category, shared params) encoding API connection compatibility and ensuring structurally valid chains before any LLM call.',
      'Multi-agent orchestration with Scenario Planner, Assistant Agent, User Agent, and Mock Executor; ConversationGrounding replaces placeholder arguments from SessionState.',
      '3-level quality system: pre-execution validators block invalid tool calls, LLM judge scores 4 dimensions, repair loop fixes or regenerates low-quality conversations.',
      'Diversity steering that tracks corpus distribution and adjusts sampling constraints per batch to prevent category imbalance.',
    ],
    approach: [
      'Structural validity enforced at the graph level before LLM involvement.',
      'Session state tracked separately from conversation history for fast O(1) ID lookup.',
      'Quality enforced at execution, generation, and evaluation layers independently.',
    ],
    outcomes: [
      'Diversity steering improved multi-step conversation ratio from 59% to 64%.',
      'Mean tool calls per conversation improved from 2.85 to 3.20 with no quality regression.',
      'Three-level quality system produces clean JSONL training corpus at scale.',
    ],
    learnings: [
      'Structural validity in training data matters more than generation model quality.',
      'Separating state management (SessionState vs ConversationState) makes grounding reliable.',
    ],
  },
  {
    slug: 'contract-analyzer',
    title: 'Contract Analyzer',
    featured: true,
    category: 'LLM / Multi-Agent / RAG',
    summary:
      'Enterprise contract analysis platform using LangGraph multi-agent orchestration for parallel clause extraction, risk flagging, compliance scoring, and conversational Q&A with PDF citation highlighting.',
    whyItMatters:
      'Manual contract review is slow and inconsistent. This platform automates extraction, risk analysis, and Q&A while grounding every claim to exact document passages for legal-grade auditability.',
    stack: [
      'Python',
      'LangGraph',
      'FastAPI',
      'React',
      'TypeScript',
      'ChromaDB',
      'PyMuPDF',
      'OpenAI API',
    ],
    githubUrl: 'https://github.com/Sankar16/contract-analyzer',
    demoUrl: '',
    overview:
      'Contract analysis platform using LangGraph with 3 parallel agents (Clause, Risk, Summarizer) for ~3x faster analysis. Multi-query RAG with citation markers highlights exact PDF passages; compliance scored against a swappable client ruleset.',
    problem:
      'Enterprise contract review requires clause extraction, risk flagging, compliance scoring, summarization, and Q&A — done sequentially this is slow, done without structure the outputs are unreliable and unauditable.',
    built: [
      'LangGraph StateGraph with supervisor routing 3 parallel agents (Clause, Risk, Summarizer), reducing analysis time ~3x versus sequential execution.',
      'Conditional Consistency Agent that detects legal drift in bilingual contracts using Unicode script analysis, firing only when needed with zero overhead for English-only contracts.',
      'Multi-query RAG (5 query expansions, top-10 deduplication) with numbered citation markers that map LLM claims to exact PDF bounding boxes for in-document highlighting.',
      'Compliance scoring against a swappable client-specific JSON ruleset with weighted rules, enabling different enterprise standards without code changes.',
      'Q&A risk assessment after every turn that surfaces risks the upfront analysis missed.',
    ],
    approach: [
      'Parallel agents with shared TypedDict state using operator.add to prevent write conflicts.',
      'Supervisor uses deterministic routing logic with no LLM involvement for fast, reliable orchestration.',
      'Citation markers assigned by numbering context blocks in the prompt; post-processing maps [n] to page coordinates.',
    ],
    outcomes: [
      'Analysis time reduced ~3x through parallel agent execution.',
      'Every claim linked to exact PDF passage for legal-grade audit trail.',
      'Swappable compliance ruleset enables enterprise onboarding without redeployment.',
    ],
    learnings: [
      'Deterministic supervisor routing is faster and more reliable than LLM-based routing.',
      'Citation grounding is what separates a demo from an enterprise-ready system.',
    ],
  },
  {
    slug: 'candidate-recommendation-system',
    title: 'Candidate Recommendation System',
    featured: true,
    category: 'AI / NLP / Retrieval',
    summary:
      'Resume-to-job matching system using LLM-based structured field extraction, section-level embeddings, and weighted scoring to rank candidates with LLM-generated explanations.',
    whyItMatters:
      'Full-text resume matching is inconsistent due to format variation. Section-level structured comparison gives more stable, explainable ranking.',
    stack: [
      'Python',
      'Streamlit',
      'LLaMA 3.1 8B',
      'Hugging Face API',
      'Sentence Transformers',
      'FAISS',
      'pdfplumber',
      'python-docx',
    ],
    githubUrl: 'https://github.com/Sankar16/Job-Candidate-Recommendation-System/tree/main',
    demoUrl: 'https://drive.google.com/file/d/1LR1LYkmmYKAvBK8xwwRoID7J77LIfBof/view?usp=sharing',
    overview:
      'Resume-to-JD matching platform using LLaMA 3.1 8B for structured field extraction, SentenceTransformers for section-level embeddings (8 dimensions), and FAISS for similarity indexing; configurable weighted scoring ranks top-5 candidates with LLM-generated explanations.',
    problem:
      'Full-text matching across resumes and job descriptions is inconsistent because resume formats vary heavily. Structured field-based comparison at the section level provides more stable and explainable ranking.',
    built: [
      'Multi-format resume ingestion for PDF, DOCX, DOC, and TXT.',
      'LLM-based structured field extraction from both resumes and job descriptions into a shared schema.',
      'Section-level embeddings across 8 dimensions (skills, experience, education, projects, etc.) with FAISS indexing.',
      'Configurable weighted scoring per role type and LLM-generated match explanation for top candidates.',
    ],
    approach: [
      'Section-level matching instead of document-level to surface per-dimension signal.',
      'Same JSON schema for both JD and resume enables direct section-to-section comparison.',
      'Weights configurable per role type — different profiles for IC vs management roles.',
    ],
    outcomes: [
      'Recruiter-facing recommendation workflow with explainable per-dimension ranking.',
      'Section-level approach more robust than naive full-text matching across format variation.',
    ],
    learnings: [
      'Granular section-level matching surfaces gaps full-text scoring hides.',
      'LLM-generated explanations make ranking decisions actionable, not just numerical.',
    ],
  },
    {
    slug: 'causallab',
    title: 'CausalLab',
    featured: true,
    category: 'Experimentation / Analytics Platform',
    summary:
      'Full-stack platform for reviewing A/B test datasets with diagnostics, treatment-effect estimation, trust-aware reporting, and LLM-generated stakeholder summaries.',
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
      'CausalLab is an experimentation review and treatment-effect analysis platform for randomized A/B test datasets. Validates mapping, runs diagnostics, estimates lift, reviews trust signals, and generates stakeholder-ready summaries.',
    problem:
      'Teams often focus only on p-values and lift even when the underlying experiment is flawed, leading to decisions based on statistically significant but unreliable results.',
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
      'End-to-end experimentation review platform with frontend, backend, and reporting flow.',
      'Demonstrates the distinction between statistically significant and decision-ready results.',
    ],
    learnings: [
      'Trust-aware analysis is often more useful than raw significance alone.',
      'Good experimentation tooling needs both statistical rigor and user-friendly reporting.',
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
      'Predicts machine failures before they occur by modeling sensor and wear data from CNC milling machine operations.',
    problem:
      'Unexpected breakdowns in manufacturing create downtime and cost overruns. The goal was to classify both failures and failure types from historical machine sensor data.',
    built: [
      'EDA pipeline to identify important sensor relationships and thresholds.',
      'Feature engineering for power overload and overstrain patterns.',
      'Classification workflows using Logistic Regression, Random Forest, KNN, SVM, and XGBoost.',
      'SMOTE-based handling of class imbalance with hyperparameter tuning.',
    ],
    approach: [
      'Benchmarked multiple models using precision, recall, F1, and ROC-AUC.',
      'Focused on minority-class recall improvement for rare failure cases.',
      'Designed around proactive maintenance rather than reactive reporting.',
    ],
    outcomes: [
      'Best Random Forest + SMOTE model reached 98.2% accuracy.',
      'Identified practical failure triggers like torque x wear and thermal margin drops.',
    ],
    learnings: [
      'In predictive maintenance, recall on rare failure cases matters more than headline accuracy.',
      'Feature engineering makes industrial ML outputs much more interpretable.',
    ],
  },
  {
    slug: 'jobcruncher-job-analyzer',
    title: 'JobCruncher',
    featured: false,
    category: 'Full-Stack / Search Platform',
    summary:
      'Job search and filtering platform with resume analysis, bookmarking, scraping workflows, and deployment-oriented architecture.',
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
      'A lightweight platform for searching and filtering job postings, analyzing resumes, and helping users track relevant opportunities.',
    problem:
      'Students and job seekers spend too much time filtering and repeatedly searching through job portals.',
    built: [
      'Job search and filtering system by title, location, company, and skills.',
      'Resume analysis features including ATS-style review.',
      'Bookmarking, notifications, and 2FA-enhanced account workflows.',
      'Deployment design using Docker, Kubernetes, and load balancing.',
    ],
    approach: [
      'Combined scraping, filtering, and user account workflows in one product.',
      'Treated deployment and scalability as part of the system design story.',
    ],
    outcomes: [
      'Full-stack project with real product depth and backend architecture thinking.',
      'Security, deployment, and scaling concepts beyond a standard Flask CRUD app.',
    ],
    learnings: [
      'User value often comes from workflow simplification, not just raw features.',
      'Scalability thinking can strengthen even student product projects.',
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
      'OpenAI API',
      'PDF Processing',
      'Chunking',
      'Summarization',
    ],
    githubUrl: 'https://github.com/Sankar16/research_paper_summarizer',
    demoUrl: '',
    overview:
      'Paper search and summarization app that finds arXiv papers, extracts text, chunks content, and produces section-wise bullet summaries plus citations.',
    problem:
      'Research papers are lengthy and difficult to review quickly. The goal was to make them easier to understand without losing structure.',
    built: [
      'arXiv search and metadata retrieval.',
      'PDF download and text extraction pipeline.',
      'Chunking logic to stay within token limits.',
      'Structured summarization and citation generation.',
    ],
    approach: [
      'Chunk-level summarization followed by merged structured output.',
      'Fallback to abstract summarization when full PDF text is unavailable.',
    ],
    outcomes: [
      'Practical research assistant workflow for technical literature review.',
    ],
    learnings: [
      'Chunking strategy is essential when summarizing long technical documents.',
      'Structured output makes AI summaries much more usable.',
    ],
  },
];

export default projects;