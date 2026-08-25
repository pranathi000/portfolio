import { site } from "@/lib/site";
import HeroArt from "./HeroArt";

export default function Header() {
  return (
    <header className="pt-14 pb-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div>
          <h1 className="font-hand text-6xl md:text-7xl leading-none mb-2">{site.name}</h1>
          <p className="text-sm text-faint mb-3">{site.role}</p>
          <p className="italic text-[0.95rem] text-faint max-w-[46ch]">&ldquo;{site.quote}&rdquo;</p>
        </div>
        <div className="shrink-0 self-center md:self-start">
          <HeroArt />
        </div>
      </div>

      <nav className="text-[0.92rem] flex flex-wrap gap-x-5 gap-y-1 mt-8">
        <a href="#articles">Articles</a>
        <a href="#research">Research</a>
        <a href="#projects">Projects</a>
        <a href="#discoveries">Discoveries</a>
        <a href="#love">Things I love</a>
        <a href="#ai-evolution">AI evolution
