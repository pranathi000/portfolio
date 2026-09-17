// ─────────────────────────────────────────────────────────────────────────
// This file is the whole content of the site. Every section on the
// homepage reads from one of the arrays below. To add something new,
// add one object to the matching array — no component changes needed.
// Leave a link as "" (empty string) as a placeholder until you have it;
// the site shows nothing broken, just no link yet.
// ─────────────────────────────────────────────────────────────────────────

// Your own written pieces. `preview` is the short teaser shown on the
// homepage (article stays "half visible" — full text lives in the PDF).
// `pdf` should point to a file in /public (e.g. "/articles/my-piece.pdf").
export type Article = { emoji: string; title: string; date: string; preview: string; pdf: string };
export const articles: Article[] = [
  {
    emoji: "🧠",
    title: "Understanding PPO Better: The Intuition Behind Policy, Value, and Reward",
    date: "01-07-2026",
    preview:
      "PPO became much easier to understand once I stopped treating its policy, value network, and reward model as isolated pieces. This article walks through how they interact, using a simple four-color example to build the intuition behind advantage, updates, and PPO’s clipping mechanism.",
    pdf: "https://medium.com/@singarajupranathi/understanding-ppo-better-the-intuition-behind-policy-value-and-reward-9add03dbbcf4?sharedUserId=singarajupranathi",
  },
  {
    emoji: "🧠",
    title: "The Adam Optimizer Finally Made Sense !",
    date: "30-06-2026",
    preview:
      "Breaking down Adam beyond the equations - understanding how momentum, adaptive learning rates, and gradient updates work together, and why the optimizer behaves the way it does in practice.",
    pdf: "https://medium.com/ai-in-plain-english/the-adam-optimizer-finally-made-sense-63a9e045aa12?sharedUserId=singarajupranathi",
  },
  {
    emoji: "🧠",
    title: "Understanding CUDA Register Pressure” Through a Series of Failed Experiments",
    date: "25-04-2026",
    preview:
      "Trying to understand CUDA register pressure by breaking things first - exploring how register usage affects occupancy and performance, and what the failed experiments revealed along the way.",
    pdf: "https://medium.com/@singarajupranathi/understanding-cuda-register-pressure-through-a-series-of-failed-experiments-f25338b4e807?sharedUserId=singarajupranathi",
  },
  {
    emoji: "🧠",
    title: "“Understanding CUDA Register Spilling: From Kernel Experiments to Hopper and Blackwell Architectures",
    date: "27-04-2026",
    preview:
      "Wrote it to answer every question that naturally appears when trying to understand CUDA register spilling from the ground up. Not just what spilling is, but when it appears, how modern kernels manage it, and why it still matters even on recent GPU architectures like Hopper and Blackwell.",
    pdf: "https://medium.com/@singarajupranathi/this-article-is-intentionally-long-c2108e7a0ecc?sharedUserId=singarajupranathi",
  },
  {
    emoji: "🧠",
    title: "Naive GEMM Is Not the First CUDA Kernel You Optimize",
    date: "27-04-2026",
    preview:
      "A practical look at why optimizing a CUDA kernel starts with understanding the computation and its bottlenecks - using GEMM to explore memory access, tiling, and the decisions that actually matter for GPU performance.",
    pdf: "https://medium.com/@singarajupranathi/naive-gemm-is-not-the-first-cuda-kernel-you-optimize-54891db774a3?sharedUserId=singarajupranathi",
  },
  {
    emoji: "🧠",
    title: "Naive GEMM Is Not the First CUDA Kernel You Optimize",
    date: "27-04-2026",
    preview:
      "A practical look at why optimizing a CUDA kernel starts with understanding the computation and its bottlenecks - using GEMM to explore memory access, tiling, and the decisions that actually matter for GPU performance.",
    pdf: "https://medium.com/@singarajupranathi/naive-gemm-is-not-the-first-cuda-kernel-you-optimize-54891db774a3?sharedUserId=singarajupranathi",
  },
];

// Your own research, projects, and technical work — things you built
// or authored. Distinct from "discoveries" below, which are other
// people's work you're recommending.
export type Work = { emoji: string; title: string; tag: string; desc: string; link: string };
export const research: Work[] = [
  {
    emoji: "📄",
    title: "FedPAE — A Privacy-Preserving Federated Personalized Autoencoder Framework for Distributed Cloud Systems",
    tag: "ICTIS 2026 · Published",
    desc: "A federated personalized autoencoder for distributed cloud systems, achieving higher anomaly-detection performance than FedAvg and FedProx baselines without centralizing client data.",
    link: "",
  },
  {
    emoji: "📄",
    title: "MAD-EBA — A Detector-Agnostic Behavioral Anomaly Detection Framework for Smart Cloud Systems",
    tag: "Poster · Accepted",
    desc: "A detector-agnostic framework for behavioral anomaly detection, evaluated across Isolation Forest and autoencoder-based models over thousands of entity-period profiles.",
    link: "",
  },
];

export const projects: Work[] = [
  {
    emoji: "🖥️",
    title: "End-to-End Transformer Attention Inference — Cross-Layer CUDA Study",
    tag: "CUDA · Triton · CUTLASS",
    desc: "A cross-implementation study of attention kernels, comparing shared-memory tiling and warp-level tuning against reference libraries.",
    link: "",
  },
  {
    emoji: "🖥️",
    title: "Minimal Transformer Inference Engine — KV-Cache, Continuous Batching, Streaming",
    tag: "CUDA · PyTorch",
    desc: "A from-scratch serving engine with KV-cache reuse and a continuous-batching scheduler, with streaming token output.",
    link: "",
  },
  {
    emoji: "🖥️",
    title: "Memory-Efficient Long-Context Attention — Paged KV-Cache + IO-Aware FlashAttention",
    tag: "CUDA · FlashAttention",
    desc: "FlashAttention-style tiled attention with paged KV-cache allocation, scaling inference to very long sequences.",
    link: "",
  },
  {
    emoji: "🩺",
    title: "Autism Detection & Screening Assessment",
    tag: "ML · Streamlit",
    desc: "A real-time screening tool served through a Streamlit interface, comparing several classifiers.",
    link: "https://github.com/pranathi000/autism",
  },
  {
    emoji: "🌅",
    title: "3D Graphics Engine — Ray Tracing",
    tag: "Graphics",
    desc: "Shading, anti-aliasing, super-sampling, and real-time rendering, written from scratch.",
    link: "",
  },
];

// Discoveries: things made by OTHER people that you're recommending —
// papers, articles, sites, tools, artwork, music, books, anything.
// Always opens externally in a new tab. Not your own work.
export type Discovery = { emoji: string; kind: string; title: string; desc: string; link: string; date: string };
export const discoveries: Discovery[] = [
  {
    emoji: "📚",
    kind: "Paper",
    title: "Lorem ipsum dolor sit amet, consectetur",
    desc: "Short description of why I like or recommend it.",
    link: "",
    date: "2026-08-10",
  },
  {
    emoji: "📖",
    kind: "Book",
    title: "Ut enim ad minim veniam quis nostrud",
    desc: "Short description of why I like or recommend it.",
    link: "",
    date: "2026-06-28",
  },
  {
    emoji: "🌐",
    kind: "Website",
    title: "Duis aute irure dolor in reprehenderit",
    desc: "Short description of why I like or recommend it.",
    link: "",
    date: "2026-04-14",
  },
];

// Things I love: broader interests, no strict format required.
// A loose, growable list — music, art, science, books, ideas, people.
export type Loved = { emoji: string; label: string; note: string; link: string };
export const thingsILove: Loved[] = [
  { emoji: "🎨", label: "Art", note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link: "" },
  { emoji: "🎵", label: "Music", note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link: "" },
  { emoji: "🔬", label: "Science", note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link: "" },
  { emoji: "📚", label: "Books", note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link: "" },
];

// AI Evolution: your own running, dated log of developments,
// milestones, or shifts in AI that you find significant. Append freely.
export type Milestone = { date: string; text: string };
export const aiEvolution: Milestone[] = [
  { date: "2026-06", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod." },
  { date: "2026-02", text: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris." },
  { date: "2025-11", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse." },
];

// Education / certifications — folded quietly into About, not shown
// anywhere else on the site.
export const education = [
  { school: "Rajiv Gandhi University of Knowledge & Technologies", detail: "B.Tech, Electronics & Communication · CGPA 8.3", period: "2022 — Present" },
  { school: "Pre-University Course", detail: "GPA 9.57", period: "2020 — 2022" },
];
export const certifications = [
  "Machine Learning Specialization — DeepLearning.AI & Stanford Online",
  "Top 5% — Industrial IoT (IIoT), NPTEL 2025",
  "AI Fundamentals — IBM SkillsBuild",
  "Intro to Programming — Kaggle",
];
