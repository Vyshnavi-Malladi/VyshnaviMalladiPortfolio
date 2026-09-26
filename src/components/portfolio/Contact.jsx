import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { profile } from "@/constants/portfolio";
const SERVICE_ID = import.meta.env["VITE_EMAILJS_SERVICE_ID"];
const TEMPLATE_ID = import.meta.env["VITE_EMAILJS_TEMPLATE_ID"];
const PUBLIC_KEY = import.meta.env["VITE_EMAILJS_PUBLIC_KEY"];
const fieldClass = "w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-accent/60 focus:ring-2 focus:ring-accent/25";
function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    setSending(true);
    try {
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY });
        toast.success("Message sent \u2014 I'll get back to you within 24 hours.");
        form.reset();
      } else {
        const data = new FormData(form);
        const subject = encodeURIComponent(String(data.get("subject") ?? "Portfolio enquiry"));
        const body = encodeURIComponent(
          `${data.get("message")}

\u2014 ${data.get("name")} (${data.get("email")})`
        );
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
        toast.info("Opening your email client\u2026");
      }
    } catch {
      toast.error("Couldn't send that. Please email me directly instead.");
    } finally {
      setSending(false);
    }
  };
  const details = [
    { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { Icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { Icon: MapPin, label: "Location", value: profile.location, href: void 0 }
  ];
  const socials = [
    { Icon: FaGithub, href: profile.socials.github, label: "GitHub" },
    { Icon: FaLinkedinIn, href: profile.socials.linkedin, label: "LinkedIn" },
  ];
  return <section id="contact" className="scroll-mt-28 py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
    eyebrow="Contact"
    title="Let's build something together"
    description="Open to full-time roles, internships and freelance collaborations. I reply to every message."
  />

        <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal direction="left">
            <form ref={formRef} onSubmit={onSubmit} className="glass rounded-3xl p-8 sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-medium">
                    Name
                  </label>
                  <input id="name" name="name" required placeholder="Your name" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-medium">
                    Email
                  </label>
                  <input
    id="email"
    name="email"
    type="email"
    required
    placeholder="you@company.com"
    className={fieldClass}
  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="subject" className="mb-2 block text-xs font-medium">
                  Subject
                </label>
                <input
    id="subject"
    name="subject"
    required
    placeholder="What's this about?"
    className={fieldClass}
  />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-xs font-medium">
                  Message
                </label>
                <textarea
    id="message"
    name="message"
    required
    rows={5}
    placeholder="Tell me a bit about the role or project…"
    className={`${fieldClass} resize-none`}
  />
              </div>
              <button
    type="submit"
    disabled={sending}
    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary via-violet to-primary bg-[length:200%_100%] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:bg-[position:100%_0] disabled:opacity-60"
  >
                {sending ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
                {sending ? "Sending\u2026" : "Send Message"}
              </button>
            </form>
          </Reveal>

          <Reveal direction="right" delay={0.08}>
            <div className="flex h-full flex-col gap-5">
              <div className="glass rounded-3xl p-8">
                <div className="space-y-5">
                  {details.map(({ Icon, label, value, href }) => <div key={label} className="flex items-center gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary/25 to-accent/20 text-accent">
                        <Icon className="size-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                          {label}
                        </p>
                        {href ? <a
    href={href}
    className="truncate text-sm font-medium transition-colors hover:text-accent"
  >
                            {value}
                          </a> : <p className="text-sm font-medium">{value}</p>}
                      </div>
                    </div>)}
                </div>
                <div className="mt-7 flex gap-3">
                  {socials.map(({ Icon, href, label }) => <a
    key={label}
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="grid size-11 place-items-center rounded-2xl border border-border transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
  >
                      <Icon className="size-4" />
                    </a>)}
                </div>
              </div>

              <div className="glass flex-1 overflow-hidden rounded-3xl p-2">
                <iframe
    title="Location map"
    src="https://www.google.com/maps?q=Kakinada,Andhra+Pradesh,India&output=embed"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="h-full min-h-[16rem] w-full rounded-2xl border-0 grayscale-[0.4]"
  />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>;
}
export {
  Contact
};
