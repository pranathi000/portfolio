// ─────────────────────────────────────────────────────────────────────────
// This file is the whole content of the site. Every section on the
// homepage reads from one of the arrays below. To add something new,
// add one object to the matching array — no component changes needed.
// Leave a link as "" (empty string) as a placeholder until you have it.
// ─────────────────────────────────────────────────────────────────────────

export type Article = { emoji: string; title: string; date: string; preview: string; pdf: string };
export const articles: Article[] = [
  {
    emoji: "🧠",
    title: "Understanding PPO Better: The Intuition Behind Policy, Value, and Reward",
    date: "2026-07-01",
    preview:
      "PPO became much easier to understand once I stopped treating its policy, value network, and reward model as isolated pieces. This article walks through how they interact, using a simple four-color example to build the intuition behind advantage, updates, and PPO's clipping mechanism.",
    pdf: "",
  },
  {
    emoji: "⚙️",
    title: "The Adam Optimizer Finally Made Sense!",
    date: "2026-06-30",
    preview:
      "Breaking down Adam beyond the equations - understanding how momentum, adaptive learning rates, and gradient updates work together, and why the optimizer behaves the way it does in practice.",
    pdf: "",
  },
  {
    emoji: "🖥️",
    title: "Understanding CUDA Register Pressure Through a Series of Failed Experiments",
    date: "2026-04-25",
    preview:
      "Trying to understand CUDA register pressure by breaking things first - exploring how register usage affects occupancy and performance, and what the failed experiments revealed along the way.",
    pdf: "",
  },
  {
    emoji: "🖥️",
    title: "Understanding CUDA Register Spilling: From Kernel Experiments to Hopper and Blackwell Architectures",
    date: "2026-04-27",
    preview:
      "Wrote it to answer every question that naturally appears when trying to understand CUDA register spilling from the ground up. Not just what spilling is, but when it appears, how modern kernels manage it, and why it still matters even on recent GPU architectures like Hopper and Blackwell.",
    pdf: "",
  },
  {
    emoji: "🖥️",
    title: "Naive GEMM Is Not the First CUDA Kernel You Optimize",
    date: "2026-04-27",
    preview:
      "A practical look at why optimizing a CUDA kernel starts with understanding the computation and its bottlenecks - using GEMM to explore memory access, tiling, and the decisions that actually matter for GPU performance.",
    pdf: "",
  },
  {
    emoji: "🖥️",
    title: "CUDA Programming: What Happens When You Give Your Computer 10,000 Workers Instead of 4",
    date: "2025-08-02",
    preview:
      "An introduction to CUDA's parallel execution model, exploring how threads, blocks, and warps work together to enable massively parallel computation on GPUs.",
    pdf: "",
  },
];

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
    emoji: "🧪",
    title: "Mini-STARK: A Stateful Environment for Evaluating AI Agents",
    tag: "LangGraph · Python · May 2026 – Present",
    desc: "Built a 3-layer verification system to catch agent failures invisible to output-level checks, discovering environment state and conversational memory are architecturally separate systems.",
    link: "",
  },
  {
    emoji: "📊",
    title: "Targeted SFT and Data Quality Study on Dolly 15K",
    tag: "PyTorch · HuggingFace Transformers · GPT-2 · Mar 2026 – May 2026",
    desc: "Ran 8 controlled experiments improving instruction-following from 0% to 75%, proving SFT only improves what it's trained on and that 15% corrupted data collapses task-specific accuracy to 0%.",
    link: "",
  },
  {
    emoji: "🎯",
    title: "Complete RLHF Pipeline: SFT, Reward Modeling, GRPO and DPO on UltraFeedback",
    tag: "PyTorch · HuggingFace TRL · GPT-2 · Feb 2026 – Apr 2026",
    desc: "Trained a reward model from scratch on 35K preference pairs achieving 56.5% accuracy and ran GRPO/DPO, finding that removing KL penalty destabilizes training rather than just causing reward hacking.",
    link: "",
  },
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

export type CurrentWorkItem = { emoji: string; title: string; period: string; desc: string; link: string };
export const currentWork: CurrentWorkItem[] = [
  {
    emoji: "🌍",
    title: "Aya Expedition — Multicultural Riddles Benchmark, Cohere Labs",
    period: "July – August 2026",
    desc: "Contributed to Telugu human evaluations, and contributed to and coordinated Kannada human evaluations, for MultiCulturalRiddle: A Multicultural Benchmark of Riddles — a benchmark of culturally-grounded riddles spanning 61 cultures and 51 languages, evaluated on 24 LLMs.",
    link: "https://openreview.net/forum?id=sjdqmzc5B5",
  },
  {
    emoji: "🧩",
    title: "Co-Lead, Multimodal Group — Cohere Labs Open Science Community",
    period: "September 2026 – Present",
    desc: "Helping run reading groups, organize research discussions, and coordinate multimodal research projects within the community.",
    link: "https://labscommunity.cohere.com/community-programs/multimodal",
  },
];

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

export const lovedSong = {
  artist: "Marvin Gaye",
  title: "I Heard It Through the Grapevine",
  note: "somehow this song feels like it knows something i don't.",
  link: "",
};

export const lovedBooks = [
  { title: "Notes from Underground", note: "still thinking about this one." },
  { title: "The Myth of Sisyphus", note: "this one stayed with me." },
];

export const lovedArt = [
  { note: "no explanation necessary." },
  { note: "" },
  { note: "" },
  { note: "" },
  { note: "" },
];

export const lovedRabbitHoles = [
  { title: "JEPA", note: "went in curious. came out with 17 tabs open.", link: "" },
  { title: "", note: "read this at 1am. bad decision. excellent paper.", link: "" },
];

export const lovedWriting = [
  { title: "a Substack piece", note: "wrote this because apparently thinking about it wasn't enough.", link: "" },
];

export type EvolutionItem = { title: string; authors: string; desc: string; link: string };
export type EvolutionNode = { label: string; angle: number; items: EvolutionItem[] };
export const aiEvolutionNodes: EvolutionNode[] = [
  {
    label: "Representation & Learning",
    angle: 15,
    items: [
      {
        title: "Attention Is All You Need",
        authors: "Vaswani et al., 2017",
        desc: "Introduced the Transformer architecture, replacing recurrence with self-attention. Nearly everything downstream of this list starts here.",
        link: "https://arxiv.org/abs/1706.03762",
      },
    ],
  },
  {
    label: "Multimodal Models",
    angle: 55,
    items: [
      {
        title: "Learning Transferable Visual Models From Natural Language Supervision (CLIP)",
        authors: "Radford et al., 2021",
        desc: "Trained images and text to share one embedding space, so a model could recognize things it was never explicitly labeled on.",
        link: "https://arxiv.org/abs/2103.00020",
      },
    ],
  },
  {
    label: "Multilingual AI",
    angle: 95,
    items: [
      {
        title: "MultiCulturalRiddle: A Multicultural Benchmark of Riddles",
        authors: "MRL Workshop, 2026",
        desc: "A benchmark of culturally grounded riddles across 61 cultures and 51 languages. I contributed Telugu and Kannada human evaluations to this one.",
        link: "https://openreview.net/forum?id=sjdqmzc5B5",
      },
    ],
  },
  {
    label: "Reasoning & Agents",
    angle: 140,
    items: [
      {
        title: "Project Astra",
        authors: "Google DeepMind, 2024–2025",
        desc: "A research prototype for a universal AI assistant that sees, hears, remembers, and takes actions across apps in real time, natively multimodal rather than stitched together from separate models.",
        link: "https://deepmind.google/models/project-astra/",
      },
      {
        title: "RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control",
        authors: "Brohan et al., 2023",
        desc: "Showed that web-scale vision-language knowledge can transfer directly into a robot's control policy, not just its perception.",
        link: "https://arxiv.org/abs/2307.15818",
      },
    ],
  },
  {
    label: "World Models",
    angle: 185,
    items: [
      {
        title: "V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning",
        authors: "Assran et al., 2025",
        desc: "Learns a world model from over a million hours of video by predicting in representation space, then plans physical actions from very little robot data.",
        link: "https://arxiv.org/abs/2506.09985",
      },
    ],
  },
  {
    label: "Model Efficiency",
    angle: 230,
    items: [
      {
        title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
        authors: "Dao et al., 2022",
        desc: "Made attention fast not by approximating it, but by rethinking how it moves data between GPU memory levels. This is close to what I work on.",
        link: "https://arxiv.org/abs/2205.14135",
      },
    ],
  },
  {
    label: "AI Safety",
    angle: 275,
    items: [
      {
        title: "Constitutional AI: Harmlessness from AI Feedback",
        authors: "Bai et al., Anthropic, 2022",
        desc: "Trained a model to critique and revise its own outputs against a written set of principles, reducing reliance on human labels for harmlessness.",
        link: "https://arxiv.org/abs/2212.08073",
      },
    ],
  },
  {
    label: "Hardware & Systems",
    angle: 320,
    items: [
      {
        title: "Efficient Memory Management for Large Language Model Serving with PagedAttention",
        authors: "Kwon et al., 2023 (SOSP 2023)",
        desc: "Treats the KV cache like OS virtual memory, storing it in non-contiguous blocks instead of pre-allocating worst-case memory. This is the same idea behind my own KV-cache work.",
        link: "https://arxiv.org/abs/2309.06180",
      },
    ],
  },
];

export type AboutNode = { label: string; note: string; angle: number; connections: number[] };
export const aboutNodes: AboutNode[] = [
  { label: "Inference", note: "Making trained models actually fast enough to use.", angle: 0, connections: [1, 5] },
  { label: "CUDA", note: "Where the real performance work happens — kernels, memory, occupancy.", angle: 51, connections: [0, 2] },
  { label: "Triton", note: "Writing fast GPU code without hand-rolling every kernel.", angle: 103, connections: [1, 3] },
  { label: "Multimodal", note: "Vision, language, and everything in between sharing one space.", angle: 154, connections: [2, 4] },
  { label: "Multilingual", note: "Telugu and Kannada evaluations reminded me how much gets lost across languages.", angle: 206, connections: [3, 5] },
  { label: "Reasoning", note: "The part where a model has to actually think, not just predict.", angle: 257, connections: [4, 6] },
  { label: "Metacognition", note: "Whether a model can notice its own uncertainty — the thing I keep circling back to.", angle: 309, connections: [5, 0] },
];

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
