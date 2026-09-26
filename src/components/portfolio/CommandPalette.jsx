import { useEffect } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { navLinks, profile, projects } from "@/constants/portfolio";
function CommandPalette({
  open,
  onOpenChange
}) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);
  const goto = (id) => {
    onOpenChange(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Jump to a section, project or link…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Sections">
          {navLinks.map((l) => <CommandItem key={l.id} onSelect={() => goto(l.id)}>
              {l.label}
            </CommandItem>)}
        </CommandGroup>
        <CommandGroup heading="Projects">
          {projects.map((p) => <CommandItem key={p.slug} onSelect={() => goto("projects")}>
              {p.title}
            </CommandItem>)}
        </CommandGroup>
        <CommandGroup heading="Links">
          <CommandItem onSelect={() => window.open(profile.socials.github, "_blank")}>
            GitHub
          </CommandItem>
          <CommandItem onSelect={() => window.open(profile.socials.linkedin, "_blank")}>
            LinkedIn
          </CommandItem>
          <CommandItem onSelect={() => window.location.href = `mailto:${profile.email}`}>
            Email me
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>;
}
export {
  CommandPalette
};
