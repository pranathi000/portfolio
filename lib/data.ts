export type EvolutionItem = { title: string; authors: string; desc: string; link: string };
export type EvolutionNode = {
  label: string;
  angle: number;
  items: EvolutionItem[];
};
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
