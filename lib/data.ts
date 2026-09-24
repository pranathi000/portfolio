// ─────────────────────────────────────────────────────────────────────────
// This file is the whole content of the site. Every section on the
// homepage reads from one of the arrays below. To add something new,
// add one object to the matching array — no component changes needed.
// Leave a link as "" (empty string) as a placeholder until you have it;
// the site shows nothing broken, just no link yet.
// ─────────────────────────────────────────────────────────────────────────
// "Current work" — ongoing contributions and collaborations, distinct
// from your own authored research/projects above.
export type CurrentWorkItem = {
  emoji: string;
  title: string;
  period: string;
  desc: string;
  link: string;
};

export const currentWork: CurrentWorkItem[] = [
  {
    emoji: "🧩",
    title: "Multimodal Group",
    period: "Cohere Labs Open Science Community · September 2026 – Present",
    desc: "Helping shape the community’s multimodal research space through reading groups, research discussions, paper sessions, and collaborative projects around multimodal AI.",
    link: "https://labscommunity.cohere.com/community-programs/multimodal",
  },
  {
    emoji: "🌍",
    title: "Aya Expedition — Multicultural Riddles Benchmark",
    period: "Cohere Labs · July – August 2026",
    desc: "Explored how language models handle culturally grounded riddles through human evaluation. Contributed Telugu evaluations and helped coordinate the Kannada evaluation effort across a benchmark spanning 61 cultures and 51 languages.",
    link: "https://openreview.net/forum?id=sjdqmzc5B5",
  },
  
];

// Your own research, projects, and technical work — things you built
// or authored. Distinct from "discoveries" below, which are other
// people's work you're recommending.
export type Work = { emoji: string; title: string; tag: string; desc: string; link: string };
export const research: Work[] = [
  
  {
    emoji: "📄",
    title: "MAD-EBA — A Detector-Agnostic Behavioral Anomaly Detection Framework for Smart Cloud Systems",
    tag: "Published . IEEE SMARTCOMP (ITALY)",
    desc: "A detector-agnostic framework for behavioral anomaly detection, evaluated across Isolation Forest and autoencoder-based models over thousands of entity-period profiles.",
    link: "https://ieeexplore.ieee.org/abstract/document/11627584",
  },
  {
  emoji: "📄",
  title: "FedPAE - A Privacy-Preserving Federated Personalized Autoencoder Framework for Distributed Cloud Systems",
  tag: "ICTIS (THAILAND) 2026 · Presented · Accepted for Publication",
  desc: "A privacy-preserving federated personalized autoencoder framework for distributed cloud systems, designed to improve anomaly detection while keeping client data decentralized.",
  link: "https://drive.google.com/file/d/1xIRU0XBV3qiwLgAX6t-2dmBHgGOGQJHe/view?usp=sharing",
  },
];


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
    title: "CUDA Programming: What Happens When You Give Your Computer 10,000 Workers Instead of 4",
    date: "02-8-2025",
    preview:
      "An introduction to CUDA’s parallel execution model, exploring how threads, blocks, and warps work together to enable massively parallel computation on GPUs.",
    pdf: "https://medium.com/@singarajupranathi/naive-gemm-is-not-the-first-cuda-kernel-you-optimize-54891db774a3?sharedUserId=singarajupranathi",
  },
];



export const projects: Work[] = [
  {
    emoji: "🖥️",
    title: "Mini-STARK: A Stateful Environment for Evaluating AI Agents",
    tag: "LangGraph · Python · May 2026 – Present",
    desc: "Built a 3-layer verification system to catch agent failures invisible to output-level checks, discovering environment state and conversational memory are architecturally separate systems.",
    link: "https://github.com/pranathi000/RLHF/tree/main/MINI-STARK",
  },

  {
    emoji: "🖥️",
    title: "Complete RLHF Pipeline: SFT, Reward Modeling, GRPO and DPO on UltraFeedback",
    tag: "PyTorch · HuggingFace TRL · GPT-2 · Feb 2026 – Apr 2026",
    desc: "Trained a reward model from scratch on 35K preference pairs achieving 56.5% accuracy and ran GRPO/DPO, finding that removing KL penalty destabilizes training rather than just causing reward hacking.",
    link: "https://github.com/pranathi000/RLHF/tree/main/Complete%20RLHF%20pipeline",
  },

  {
    emoji: "🖥️",
    title: "Minimal Transformer Inference Engine — KV-Cache, Continuous Batching, Streaming",
    tag: "CUDA · PyTorch",
    desc: "A from-scratch serving engine with KV-cache reuse and a continuous-batching scheduler, with streaming token output.",
    link: "https://github.com/pranathi000/cuda_and_inference_engineering/tree/main/transformer%20inference%20engine",
  },
  {
    emoji: "🖥️",
    title: "Memory-Efficient Long-Context Attention — Paged KV-Cache + IO-Aware FlashAttention",
    tag: "CUDA · FlashAttention",
    desc: "FlashAttention-style tiled attention with paged KV-cache allocation, scaling inference to very long sequences.",
    link: "https://github.com/pranathi000/long-context-flashattention",
  },
  {
    emoji: "🖥️",
    title: "Autism Detection & Screening Assessment",
    tag: "ML · Streamlit",
    desc: "A real-time screening tool served through a Streamlit interface, comparing several classifiers.",
    link: "https://github.com/pranathi000/autism",
  },
  {
    emoji: "🖥️",
    title: "3D Graphics Engine — Ray Tracing",
    tag: "Graphics",
    desc: "Shading, anti-aliasing, super-sampling, and real-time rendering, written from scratch.",
    link: "https://github.com/pranathi000/ray-tracer",
  },
];

// Discoveries: things made by OTHER people that you're recommending —
// papers, articles, sites, tools, artwork, music, books, anything.
// Always opens externally in a new tab. Not your own work.
export type Discovery = {
  emoji: string;
  kind: string;
  title: string;
  desc: string;
  link: string;
  date: string;
};

export const discoveries: Discovery[] = [
  {
    emoji: "✍️",
    kind: "Essay",
    title: "The Substack Post I Had to Share",
    desc: "Came across this and immediately thought it was worth passing along. One of those reads that stays with you for a while.",
    link: "https://substack.com/home/post/p-215793178",
    date: "2026-09-17",
  },
  {
    emoji: "🧠",
    kind: "Article",
    title: "Exploring Qwen: Alibaba's Advanced Language Model Architecture",
    desc: "A good rabbit hole into Qwen — its different generations, architectural choices, multilingual focus, and how the pieces have evolved over time.",
    link: "https://galileo.ai/blog/qwen-ai-models",
    date: "2026-09-18",
  },
];

// Things I love: broader interests, no strict format required.
// A loose, growable list — music, art, science, books, ideas, people.
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

// AI Evolution — brain map. Each node is a category with a short list of
// real papers/links that shaped it. To add a new paper, find its category
// and add one object to that node's `items` array.
export type EvolutionItem = { title: string; authors: string; link: string };
export type EvolutionNode = {
  label: string;
  angle: number; // position around the brain, degrees, 0 = top
  items: EvolutionItem[];
};
export const aiEvolutionNodes: EvolutionNode[] = [
  {
    label: "Representation & Learning",
    angle: 15,
    items: [
      { title: "Attention Is All You Need", authors: "Vaswani et al., 2017", link: "https://arxiv.org/abs/1706.03762" },
    ],
  },
  {
    label: "Multimodal Models",
    angle: 55,
    items: [
      { title: "Learning Transferable Visual Models From Natural Language Supervision (CLIP)", authors: "Radford et al., 2021", link: "https://arxiv.org/abs/2103.00020" },
    ],
  },
  {
    label: "Multilingual AI",
    angle: 95,
    items: [
      { title: "MultiCulturalRiddle: A Multicultural Benchmark of Riddles", authors: "MRL 2026", link: "https://openreview.net/forum?id=sjdqmzc5B5" },
    ],
  },
  {
    label: "Reasoning & Agents",
    angle: 140,
    items: [
      { title: "RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control", authors: "Brohan et al., 2023", link: "https://arxiv.org/abs/2307.15818" },
    ],
  },
  {
    label: "Representation of the physical world",
    angle: 185,
    items: [
      { title: "V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning", authors: "Assran et al., 2025", link: "https://arxiv.org/abs/2506.09985" },
    ],
  },
  {
    label: "Model Efficiency",
    angle: 230,
    items: [
      { title: "", authors: "", link: "" },
    ],
  },
  {
    label: "AI Safety",
    angle: 275,
    items: [
      { title: "", authors: "", link: "" },
    ],
  },
  {
    label: "Hardware & Systems",
    angle: 320,
    items: [
      { title: "", authors: "", link: "" },
    ],
  },
];

// Education / certifications — folded quietly into About, not shown
// anywhere else on the site.
// About-page ring nodes — the fragmented "currently thinking about" map.
// angle is degrees around the circle (0 = top, clockwise). connections
// are indices into this same array, drawn as arcs when a node is hovered.
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
