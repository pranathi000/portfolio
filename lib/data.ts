// Everything on the homepage reads from this file.
// To add something, add one object to the matching array.
// Leave a link as "" until you have it.

export type Article = {  title: string; date: string; preview: string; pdf: string };
export const articles: Article[] = [
  {
    
    title: "Understanding PPO Better: The Intuition Behind Policy, Value, and Reward",
    date: "01-07-2026",
    preview:
      "PPO became much easier to understand once I stopped treating its policy, value network, and reward model as isolated pieces. This article walks through how they interact, using a simple four-color example to build the intuition behind advantage, updates, and PPO's clipping mechanism.",
    pdf: "https://medium.com/@singarajupranathi/understanding-ppo-better-the-intuition-behind-policy-value-and-reward-9add03dbbcf4?sharedUserId=singarajupranathi",
  },
  {
    
    title: "The Adam Optimizer Finally Made Sense!",
    date: "30-06-2026",
    preview:
      "Breaking down Adam beyond the equations - understanding how momentum, adaptive learning rates, and gradient updates work together, and why the optimizer behaves the way it does in practice.",
    pdf: "https://medium.com/ai-in-plain-english/the-adam-optimizer-finally-made-sense-63a9e045aa12?sharedUserId=singarajupranathi",
  },
  {
    
    title: "Understanding CUDA Register Pressure Through a Series of Failed Experiments",
    date: "25-04-2026",
    preview:
      "Trying to understand CUDA register pressure by breaking things first - exploring how register usage affects occupancy and performance, and what the failed experiments revealed along the way.",
    pdf: "https://medium.com/@singarajupranathi/understanding-cuda-register-pressure-through-a-series-of-failed-experiments-f25338b4e807?sharedUserId=singarajupranathi",
  },
  {
    
    title: "Understanding CUDA Register Spilling: From Kernel Experiments to Hopper and Blackwell Architectures",
    date: "27-04-2026",
    preview:
      "Wrote it to answer every question that naturally appears when trying to understand CUDA register spilling from the ground up. Not just what spilling is, but when it appears, how modern kernels manage it, and why it still matters even on recent GPU architectures like Hopper and Blackwell.",
    pdf: "https://medium.com/@singarajupranathi/this-article-is-intentionally-long-c2108e7a0ecc?sharedUserId=singarajupranathi",
  },
  {
    
    title: "Naive GEMM Is Not the First CUDA Kernel You Optimize",
    date: "27-04-2026",
    preview:
      "A practical look at why optimizing a CUDA kernel starts with understanding the computation and its bottlenecks - using GEMM to explore memory access, tiling, and the decisions that actually matter for GPU performance.",
    pdf: "https://medium.com/@singarajupranathi/naive-gemm-is-not-the-first-cuda-kernel-you-optimize-54891db774a3?sharedUserId=singarajupranathi",
  },
  {
    
    title: "CUDA Programming: What Happens When You Give Your Computer 10,000 Workers Instead of 4",
    date: "02-08-2025",
    preview:
      "An introduction to CUDA's parallel execution model, exploring how threads, blocks, and warps work together to enable massively parallel computation on GPUs.",
    pdf: "https://medium.com/@singarajupranathi/cuda-programming-what-happens-when-you-give-your-computer-10-000-workers-instead-of-4-6a0ce9f8c34f?sharedUserId=singarajupranathi",
  },
];

export type Work = { emoji: string; title: string; tag: string; desc: string; link: string };
export const research: Work[] = [
  {
    emoji: "📄",
    title: "FedPAE: A Privacy-Preserving Federated Personalized Autoencoder Framework for Distributed Cloud Systems",
    tag: "ICTIS 2026 · Published",
    desc: "A federated personalized autoencoder for distributed cloud systems, achieving higher anomaly-detection performance than FedAvg and FedProx baselines without centralizing client data.",
    link: "/paper_ICTIS.pdf",
  },
  {
    emoji: "📄",
    title: "MAD-EBA: A Detector-Agnostic Behavioral Anomaly Detection Framework for Smart Cloud Systems",
    tag: "Paper, poster · Published",
    desc: "A detector-agnostic framework for behavioral anomaly detection, evaluated across Isolation Forest and autoencoder-based models over thousands of entity-period profiles.",
    link: "/MAD_EBA_SMARTCOMP_V4.pdf",
  },
  
];

export const projects: Work[] = [
  {
    emoji: "🧪",
    title: "Mini-STARK: A Stateful Environment for Evaluating AI Agents",
    tag: "LangGraph · Python · May 2026 to Present",
    desc: "Built a 3-layer verification system to catch agent failures invisible to output-level checks, discovering environment state and conversational memory are architecturally separate systems.",
    link: "https://github.com/pranathi000/RLHF/tree/main/MINI-STARK",
  },
  {
    emoji: "🎯",
    title: "Complete RLHF Pipeline: SFT, Reward Modeling, GRPO and DPO on UltraFeedback",
    tag: "PyTorch · HuggingFace TRL · GPT-2 · Feb 2026 to Apr 2026",
    desc: "Trained a reward model from scratch on 35K preference pairs achieving 56.5% accuracy and ran GRPO/DPO, finding that removing KL penalty destabilizes training rather than just causing reward hacking.",
    link: "https://github.com/pranathi000/RLHF/tree/main/Complete%20RLHF%20pipeline",
  },

  {
    emoji: "🖥️",
    title: "Minimal Transformer Inference Engine: KV-Cache, Continuous Batching, Streaming",
    tag: "CUDA · PyTorch",
    desc: "A from-scratch serving engine with KV-cache reuse and a continuous-batching scheduler, with streaming token output.",
    link: "https://github.com/pranathi000/cuda_and_inference_engineering/tree/main/transformer%20inference%20engine",
  },
  {
    emoji: "🖥️",
    title: "Memory-Efficient Long-Context Attention: Paged KV-Cache + IO-Aware FlashAttention",
    tag: "CUDA · FlashAttention",
    desc: "FlashAttention-style tiled attention with paged KV-cache allocation, scaling inference to very long sequences.",
    link: "https://github.com/pranathi000/long-context-flashattention",
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
    title: "3D Graphics Engine: Ray Tracing",
    tag: "Graphics",
    desc: "Shading, anti-aliasing, super-sampling, and real-time rendering, written from scratch.",
    link: "https://github.com/pranathi000/ray-tracer",
  },
];

export type CurrentWorkItem = { emoji: string; title: string; period: string; desc: string; link: string };
export const currentWork: CurrentWorkItem[] = [
    {
    emoji: "🧩",
    title: "Multimodal CO-LEAD",
    period: "Cohere Labs Open Science Community · September 2026 to Present",
    desc: "Helping shape the community's multimodal research space through reading groups, research discussions, paper sessions, and collaborative projects around multimodal AI.",
    link: "https://labscommunity.cohere.com/community-programs/multimodal",
  },
  {
    emoji: "🌍",
    title: "Aya Expedition: Multicultural Riddles Benchmark",
    period: "Cohere Labs · July to August 2026",
    desc: "Explored how language models handle culturally grounded riddles through human evaluation. Contributed Telugu evaluations and helped coordinate the Kannada evaluation effort across a benchmark spanning 61 cultures and 51 languages.",
    link: "https://openreview.net/forum?id=sjdqmzc5B5",
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
    date: "10-08-2026",
  },
  {
    emoji: "📖",
    kind: "Book",
    title: "Ut enim ad minim veniam quis nostrud",
    desc: "Short description of why I like or recommend it.",
    link: "",
    date: "28-06-2026",
  },
  {
    emoji: "🌐",
    kind: "Website",
    title: "Duis aute irure dolor in reprehenderit",
    desc: "Short description of why I like or recommend it.",
    link: "",
    date: "14-04-2026",
  },
];


export const lovedArt = [
  { note: "no explanation necessary." },
  { note: "" },
  { note: "" },
  { note: "" },
  { note: "" },
];

export const lovedRabbitHoles = [
  { title: "JEPA", note: "read this at 1AM. bad decision :|  excellent paper :))", link: "https://arxiv.org/abs/2606.27014" },
  { title: "", note: "went in curious. came out with 17 tabs open. ", link: "https://arxiv.org/abs/2505.01658" },
];

export const lovedWriting = [
  { title: "a Substack piece", note: "wrote this because apparently thinking about it wasn't enough. Check out my substack! Life theories, psychology and what not!!", link: "https://substack.com/@curious0" },
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
        authors: "Submitted to MRL 2026",
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
        authors: "Google DeepMind, 2024 to 2025",
        desc: "A research prototype for a universal AI assistant: video understanding, screen sharing, memory, and computer control, with parts of it moving into Gemini Live.",
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
  { label: "CUDA", note: "Where the real performance work happens: kernels, memory, occupancy.", angle: 51, connections: [0, 2] },
  { label: "Triton", note: "Writing fast GPU code without hand-rolling every kernel.", angle: 103, connections: [1, 3] },
  { label: "Multimodal", note: "Vision, language, and everything in between sharing one space.", angle: 154, connections: [2, 4] },
  { label: "Multilingual", note: "Telugu and Kannada evaluations reminded me how much gets lost across languages.", angle: 206, connections: [3, 5] },
  { label: "Reasoning", note: "The part where a model has to actually think, not just predict.", angle: 257, connections: [4, 6] },
  { label: "Metacognition", note: "Whether a model can notice its own uncertainty. The thing I keep circling back to.", angle: 309, connections: [5, 0] },
];

export const education = [
  { school: "Rajiv Gandhi University of Knowledge & Technologies", detail: "B.Tech, Electronics & Communication · CGPA 8.3", period: "2022 to Present" },
  { school: "Pre-University Course", detail: "GPA 9.57", period: "2020 to 2022" },
];
export const certifications = [
  "Machine Learning Specialization: DeepLearning.AI & Stanford Online",
  "Top 5%, Industrial IoT (IIoT), NPTEL 2025",
  "AI Fundamentals: IBM SkillsBuild",
  "Intro to Programming: Kaggle",
];
export const lovedSong = {
  artist: "Marvin Gaye",
  title: "I Heard It Through the Grapevine",
  note: "somehow this song feels like it knows something i don't.",
  link: "https://youtu.be/cXWHpbpNdHE?si=eZomQ2AzOzMMgGli",
  cover: "/marvin_gaye.jpeg",
};


export type LovedBook = { title: string; note: string; link: string; cover: string };
export const lovedBooks: LovedBook[] = [
  { title: "Notes from Underground", note: "still thinking about this one.", link: "https://www.goodreads.com/en/book/show/49455.Notes_from_Underground", cover: "/notes_from_underground.jpeg" },
  { title: "The Myth of Sisyphus", note: "this one stayed with me.", link: "https://www.goodreads.com/en/book/show/91950.The_Myth_of_Sisyphus", cover: "/myth_of_sisyphus.jpg" },
];

