const profile = {
  name: "Jagadeesh Vadapalli",
  title: "AI/ML Engineer",
  location: "Omaha, NE · Open to relocation",
  email: "jagadeeshvadapalli8@gmail.com",
  phone: "+1 (402) 320-4276",
  summary:
    "AI/ML Engineer with 5+ years building full-stack applications that put LLMs and ML systems into production. I specialise in agentic AI, retrieval-augmented and cache-augmented generation, and the backend systems that make them reliable — REST/gRPC services, MLOps pipelines, and observability across AWS, GCP, and Azure.",
};

const experience = [
  {
    role: "AI Engineer",
    period: "Jun 2025 — Present",
    bullets: [
      "Built LLM-powered tools using GPT-4 and Whisper for summarisation, transcription, and Q&A over structured and unstructured enterprise data, streamlining knowledge workflows by 30%.",
      "Operationalised RAG and Cache-Augmented Generation (CAG) systems on LLaMA-4 Scout, scaling to ~4M-token long-context workloads with vLLM + PagedAttention and TensorRT/Triton inference, achieving 92% validated reasoning accuracy.",
      "Fine-tuned transformer models (BART) using LoRA, QLoRA, and PEFT on Hugging Face Transformers with DeepSpeed across NVIDIA A100 clusters — cut training memory and cost by 60%.",
      "Designed real-time voice agents combining Whisper STT, LLaMA LLMs, and TTS with tool-calling pipelines under sub-500ms latency.",
      "Engineered an internal version-control and governance system in Go using ZFS snapshots, POSIX ACLs, SELinux, and a Git-inspired review workflow with gRPC services and PostgreSQL metadata, protecting production codebases from uncontrolled AI-generated changes.",
      "Integrated Guardrails AI and Rebuff for response-schema validation, content filtering, and prompt-injection protection in production pipelines.",
      "Built MLOps pipelines on AWS SageMaker, Step Functions, Lambda, and S3 using boto3 and the SageMaker SDK — reduced deployment turnaround by 40%.",
      "Converted PyTorch/TensorFlow models to ONNX/TensorRT for lightweight edge inference on resource-constrained devices.",
    ],
  },
  {
    role: "Graduate Assistant",
    period: "Aug 2024 — May 2025",
    bullets: [
      "Built RESTful and composition APIs to retrieve, process, and visualise forensic anthropology data for commingled human remains, connecting frontend systems to ML pipelines for real-time insight.",
      "Engineered Python pipelines that processed complex skeletal datasets — 35% faster processing, 99% measurement accuracy across 250+ osteological features.",
      "Built interactive analytical dashboards in Tableau and Plotly that improved data-interpretation speed by 40% and decision accuracy by 25%.",
      "Trained ARIMA/SARIMA forecasting models on wearable-sensor data to predict behavioural patterns of dementia patients and surface activity anomalies early.",
      "Owned end-to-end development of a dementia caregiving and social-interaction platform using Django, integrating ML and real-time data pipelines with caregiver tools and patient engagement systems.",
      "Trained LSTM/GRU models for time-series forecasting and anomaly detection on real-time data streams.",
    ],
  },
  {
    role: "AI / Data Intern",
    period: "Jun 2024 — Aug 2024",
    bullets: [
      "Designed end-to-end pipelines for large-scale automotive datasets using Azure Data Factory, Databricks, and Synapse, with Azure AI Search powering semantic search over internal documentation.",
      "Optimised data-processing workflows by 40%, accelerating downstream business insight generation.",
      "Integrated Azure OpenAI (GPT-4) to auto-summarise automotive reports and surface structured insights.",
      "Deployed models via Azure Machine Learning workspace, managing experiments and endpoint deployments; wrote unit tests and tuned C# application components.",
    ],
  },
  {
    role: "Machine Learning Operations Engineer",
    period: "Jul 2020 — Jul 2023",
    bullets: [
      "Built and deployed supervised and unsupervised models on AWS SageMaker to optimise voice-assistant engagement metrics — +14% personalisation accuracy, +18% overall engagement across multilingual workflows.",
      "Ran large-scale behavioural analyses using Python, SQL, and PySpark on Amazon EMR — improved product-decision accuracy by 20% and cut over-provisioning cost by 15%.",
      "Maintained Apache Spark + Airflow + S3 pipelines that processed data 30% faster with 25% fewer production failures.",
      "Designed A/B experiments validating ML-driven recommendations, demonstrating a 25% pipeline-efficiency lift and 12% feature-adoption gain.",
      "Prototyped PyTorch and TensorFlow models for text and speech classification — +15% accuracy, +18% workload-forecast reliability.",
      "Applied feature engineering, hyperparameter tuning, and cross-validation to reduce annotation-error rates by 22% and improve inference reliability by 20%.",
    ],
  },
];

const projects = [
  {
    name: "Long-context RAG + CAG platform",
    blurb:
      "Enterprise reasoning system on LLaMA-4 Scout with vLLM PagedAttention, TensorRT, and Triton, scaling to ~4M-token contexts at 92% reasoning accuracy.",
    stack: ["LLaMA-4 Scout", "vLLM", "TensorRT", "Triton", "FAISS", "Pinecone"],
  },
  {
    name: "Go-based AI governance system",
    blurb:
      "Internal version control and approval pipeline for AI-generated code: ZFS snapshots, POSIX ACLs + SELinux, gRPC services, PostgreSQL metadata, systemd-managed daemons.",
    stack: ["Go", "ZFS", "gRPC", "PostgreSQL", "SELinux", "systemd"],
  },
  {
    name: "Sub-500ms voice agent",
    blurb:
      "Real-time autonomous agent combining Whisper STT, LLaMA LLMs, and TTS with tool-calling and decision pipelines for low-latency conversational workflows.",
    stack: ["Whisper", "LLaMA", "TTS", "Tool calling"],
  },
  {
    name: "Dementia caregiving platform",
    blurb:
      "End-to-end Django platform with caregiver tools, patient engagement, and LSTM/GRU anomaly detection on wearable-sensor streams.",
    stack: ["Django", "PyTorch", "LSTM/GRU", "ARIMA"],
  },
  {
    name: "Forensic anthropology pipeline",
    blurb:
      "Python backend + REST APIs processing 250+ osteological features at 99% measurement accuracy, fronted by Plotly and Tableau dashboards.",
    stack: ["Python", "FastAPI", "Plotly", "Tableau"],
  },
  {
    name: "Agentic automation workflows",
    blurb:
      "n8n + LangChain orchestrations chaining LLM reasoning, real-time API calls, and conditional logic to automate decision-heavy business processes end-to-end.",
    stack: ["n8n", "LangChain", "LangGraph"],
  },
];

const skills = [
  {
    group: "Languages",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Go",
      "Java",
      "C#",
      "C/C++",
      "PHP",
      "R",
      "SQL",
    ],
  },
  {
    group: "AI / ML",
    items: [
      "Agentic AI",
      "Multi-agent systems",
      "RAG",
      "CAG",
      "LangChain",
      "LangGraph",
      "Tool calling",
      "Prompt engineering",
      "LoRA / QLoRA fine-tuning",
      "Hugging Face Transformers",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "TensorRT",
      "Triton",
      "vLLM",
      "Guardrails AI",
      "FAISS",
      "Pinecone",
      "LangSmith",
    ],
  },
  {
    group: "Backend & APIs",
    items: [
      "FastAPI",
      "Django",
      "Node.js / Express",
      "Laravel",
      "REST",
      "GraphQL",
      "gRPC",
      "Microservices",
      "Event-driven architecture",
    ],
  },
  {
    group: "Frontend",
    items: [
      "React",
      "Vue.js",
      "Next.js",
      "Tailwind CSS",
      "HTMX",
      "Templ",
      "TypeScript",
    ],
  },
  {
    group: "Data & MLOps",
    items: [
      "Apache Spark",
      "PySpark",
      "Kafka",
      "Redis Streams",
      "Airflow",
      "Databricks",
      "MLflow",
      "ETL / ELT",
    ],
  },
  {
    group: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "DynamoDB",
    ],
  },
  {
    group: "Cloud",
    items: [
      "AWS (SageMaker, EMR, S3, Lambda, ECS, Step Functions, CodePipeline, CloudWatch, ECR)",
      "GCP",
      "Azure (Data Factory, Databricks, Synapse, OpenAI, ML, Cognitive Services)",
    ],
  },
  {
    group: "Infrastructure & systems",
    items: [
      "Terraform",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Azure DevOps",
      "ZFS",
      "SELinux",
      "POSIX ACLs",
      "systemd",
      "Cobra",
      "Bubble Tea",
    ],
  },
];

const education = [
  {
    school: "University of Nebraska Omaha",
    degree: "M.S. Management Information Systems",
    period: "2023 — 2025",
  },
  {
    school: "Jawaharlal Nehru Technological University",
    degree: "B.Tech Mechanical Engineering",
    period: "2013 — 2017",
  },
];

const achievements = [
  "Standing Ovation Award for outstanding contributions to ML-driven systems.",
  "Star Performer recognition for measurable improvements to system performance and efficiency.",
  "Chess Championship winner at school, college, and Master's levels.",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <Hero />
        <Section id="about" title="About">
          <p className="text-zinc-300 leading-relaxed">{profile.summary}</p>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="space-y-10">
            {experience.map((role) => (
              <li key={role.role + role.period}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {role.role}
                  </h3>
                  <span className="font-mono text-xs text-zinc-500">
                    {role.period}
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-zinc-300 leading-relaxed">
                  {role.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Selected Projects">
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.name}
                className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5 hover:border-zinc-700 transition-colors"
              >
                <h3 className="text-base font-semibold text-zinc-100 mb-2">
                  {p.name}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-3">
                  {p.blurb}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="space-y-5">
            {skills.map((s) => (
              <div key={s.group}>
                <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-2">
                  {s.group}
                </h3>
                <ul className="flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <ul className="space-y-3">
            {education.map((e) => (
              <li
                key={e.school}
                className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
              >
                <div>
                  <div className="text-zinc-100 font-medium">{e.school}</div>
                  <div className="text-sm text-zinc-400">{e.degree}</div>
                </div>
                <span className="font-mono text-xs text-zinc-500">
                  {e.period}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="achievements" title="Achievements">
          <ul className="space-y-2 text-sm text-zinc-300 leading-relaxed">
            {achievements.map((a) => (
              <li key={a} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400"
                />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p className="text-zinc-300 mb-5">
            I&apos;m open to AI/ML engineering and full-stack roles — happy to
            chat about agentic systems, LLM infra, or production ML.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-10 items-center rounded-md bg-emerald-500 px-4 text-sm font-medium text-zinc-950 hover:bg-emerald-400 transition-colors"
            >
              Email me
            </a>
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
              className="inline-flex h-10 items-center rounded-md border border-zinc-800 px-4 text-sm font-medium text-zinc-200 hover:border-zinc-600 transition-colors"
            >
              {profile.phone}
            </a>
          </div>
        </Section>

        <footer className="mt-20 pt-8 border-t border-zinc-900 text-xs text-zinc-500">
          Built with Next.js and Tailwind. Source on GitHub.
        </footer>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <header className="mb-16 sm:mb-20">
      <p className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-4">
        {profile.title}
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-50 mb-4">
        {profile.name}
      </h1>
      <p className="text-zinc-400 mb-6">{profile.location}</p>
      <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-400">
        <a className="hover:text-zinc-100 transition-colors" href="#about">
          About
        </a>
        <a className="hover:text-zinc-100 transition-colors" href="#experience">
          Experience
        </a>
        <a className="hover:text-zinc-100 transition-colors" href="#projects">
          Projects
        </a>
        <a className="hover:text-zinc-100 transition-colors" href="#skills">
          Skills
        </a>
        <a className="hover:text-zinc-100 transition-colors" href="#education">
          Education
        </a>
        <a className="hover:text-zinc-100 transition-colors" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8 mt-14 sm:mt-20">
      <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6 pb-2 border-b border-zinc-900">
        {title}
      </h2>
      {children}
    </section>
  );
}
