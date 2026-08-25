import { site } from "@/lib/site";

export default function Header() {
  return (
    <header className="pt-14 pb-8">
      <h1 className="font-hand text-6xl md:text-7xl leading-none mb-2">{site.name}</h1>
      <p className="text-sm text-faint mb-6">{site.role}</p>
      <nav className="text-[0.92rem] flex flex-wrap gap-x-5 gap-y-1">
        <a href="#articles">Articles</a>
        <a href="#research">Research</a>
        <a href="#projects">Projects</a>
        <a href="#discoveries">Discoveries</a>
        <a href="#love">Things I love</a>
        <a href="#ai-evolution">AI evolution</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
