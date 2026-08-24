import { links } from "./site";

export type Field = { n: string; name: string; tag: string; desc: string };
export const fields: Field[] = [
  { n: "01", name: "Behavioral analytics", tag: "UEBA", desc: "Modeling entity behavior over time to set baselines and flag deviation." },
  { n: "02", name: "Anomaly detection", tag: "Unsupervised", desc: "Detector-agnostic methods across Isolation Forest and autoencoder models." },
  { n: "03", name: "Insider-threat detection", tag: "Security", desc: "Behavioral signals for cloud storage, evaluated on CMU CERT and cloud data." },
  { n: "04", name: "Federated learning", tag: "Distributed", desc: "Personalized training across clients without centralizing raw data." },
  { n: "05", name: "Privacy-preserving ML", tag: "Federated", desc: "Keeping data local while improving detection over FedAvg / FedProx." },
  { n: "06", name: "Cloud systems", tag: "Infra", desc: "Anomaly detection framed for smart, distributed cloud storage." },
  { n: "07", name: "Quantum machine learning", tag: "QML", desc: "QML-based behavioral analytics for insider-threat detection." },
  { n: "08", name: "ML systems / inference", tag: "GPU", desc: "The engineering side: CUDA/Triton kernels, KV-cache, long-context." },
];

export type Pub = { id: string; title: string; venue: string; status: "Published" | "Accepted"; desc: string; link?: string };
export const publications: Pub[] = [
  { id: "P01", title: "FedPAE — A Privacy-Preserving Federated Personalized Autoencoder Framework for Distributed Cloud Systems", venue: "ICTIS 2026", status: "Published", desc: "A federated personalized autoencoder for distributed cloud systems. Achieves 5–13% higher anomaly-detection performance than FedAvg / FedProx baselines on CMU CERT and cloud-storage datasets, without centralizing client data.", link: links.papers },
  { id: "P02", title: "MAD-EBA — A Detector-Agnostic Behavioral Anomaly Detection Framework for Smart Cloud Systems", venue: "Poster", status: "Accepted", desc: "A detector-agnostic behavioral anomaly-detection framework. Improves anomaly-detection F1 by up to 9.5% across Isolation Forest and autoencoder-based models over 2,425 entity-period profiles.", link: links.papers },
];

export type LogEntry = { year: string; text: string };
export const log: LogEntry[] = [
  { year: "2026", text: "FedPAE accepted and published at ICTIS 2026." },
  { year: "2026", text: "Systems track: transformer attention CUDA study, inference engine with KV-cache, and long-context paged attention." },
  { year: "2025", text: "Research intern at BITS Pilani — QML behavioral analytics for insider-threat detection; MAD-EBA accepted (poster)." },
  { year: "2025", text: "Autism screening ML tool; data-analytics internship at Unified Mentor; Top 5% in NPTEL Industrial IoT." },
  { year: "2024", text: "Began technical blogging on ML & GPU optimization." },
  { year: "2023", text: "Built a ray-tracing 3D graphics engine; co-founded the De-Lit literature club." },
  { year: "2022", text: "Started B.Tech (ECE) at RGUKT, Andhra Pradesh." },
];

export type System = { code: string; title: string; stack: string; date: string; desc: string; stats: { value: string; label: string }[] };
export const systems: System[] = [
  { code: "S01", title: "End-to-End Transformer Attention Inference — Cross-Layer CUDA Performance Study", stack: "CUDA · Triton · CUTLASS · cuBLAS", date: "May 2026 — Present", desc: "A cross-implementation study of attention kernels. Shared-memory tiling, vectorized loads, and warp-level execution tuning drive latency and throughput gains against reference libraries.", stats: [{ value: "3.2×", label: "lower latency" }, { value: "2.7×", label: "memory throughput" }] },
  { code: "S02", title: "Minimal Transformer Inference Engine — KV-Cache, Continuous Batching, Streaming", stack: "CUDA · PyTorch · Transformer inference", date: "Apr 2026 — Present", desc: "A from-scratch serving engine. KV-cache reuse plus a continuous-batching scheduler raise multi-request throughput and cut decode-stage latency, with streaming token output.", stats: [{ value: "4×", label: "multi-request throughput" }, { value: "35%", label: "lower decode latency" }] },
  { code: "S03", title: "Memory-Efficient Long-Context Attention — Paged KV-Cache + IO-Aware FlashAttention", stack: "CUDA · FlashAttention · Long-context", date: "Mar 2026 — May 2026", desc: "FlashAttention-style tiled attention with paged KV-cache allocation. Reduces the long-context memory footprint and scales inference to very long sequences.", stats: [{ value: "60%", label: "less memory" }, { value: "128K", label: "token context" }] },
];

export type Project = { title: string; tag: string; desc: string; link: string };
export const projects: Project[] = [
  { title: "Autism Detection & Screening Assessment", tag: "ML · Streamlit", desc: "Real-time screening tool. Random Forest reached 70% accuracy across compared classifiers, served through a Streamlit interface.", link: "https://github.com/pranathi000/autism" },
  { title: "3D Graphics Engine — Ray Tracing", tag: "Graphics", desc: "Shading, anti-aliasing, super-sampling, and real-time rendering; improved processed-image quality by 37%.", link: "https://extreme-fibre-6eb.notion.site/Understanding-a-ray-tracer-1015b3b073934f5785d7c5472d48fd1b" },
  { title: "Retail & Behavioral Data Analytics", tag: "Data · Internship", desc: "Unified Mentor internship on grocery-sales, drugs, and influencer datasets; 1.35× improvement in model performance.", link: "https://github.com/pranathi000/ML-CodeBooks" },
];

export type EduItem = { school: string; detail: string; period: string };
export const education: EduItem[] = [
  { school: "Rajiv Gandhi University of Knowledge & Technologies", detail: "B.Tech, Electronics & Communication · CGPA 8.3", period: "2022 — Present" },
  { school: "Pre-University Course", detail: "GPA 9.57", period: "2020 — 2022" },
];

export const certifications: string[] = [
  "Machine Learning Specialization — DeepLearning.AI & Stanford Online",
  "Top 5% — Industrial IoT (IIoT), NPTEL 2025",
  "AI Fundamentals — IBM SkillsBuild",
  "Intro to Programming — Kaggle",
];

export type Contribution = { title: string; detail: string; period: string };
export const contributions: Contribution[] = [
  { title: "Technical blogging — ML & GPU optimization", detail: "10+ articles on HPC architectures, GPU optimization, and CUDA patterns with code.", period: "2024 — Present" },
  { title: "De-Lit — The Literature Club", detail: "Co-founder. Built a 50+ member community for discussion of literature and critical thinking.", period: "2023 — 2026" },
];
