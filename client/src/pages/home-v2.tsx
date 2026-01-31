import { ArrowRight, Droplets, Heart, Share2, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function Stat({ label, value, testId }: { label: string; value: string; testId: string }) {
  return (
    <div className="flex flex-col gap-1" data-testid={testId}>
      <div className="font-display text-2xl sm:text-3xl text-foreground">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <a
            href="#top"
            className="flex items-center gap-2"
            data-testid="link-logo"
            aria-label="charity: water"
          >
            <div className="grid size-9 place-items-center rounded-xl bg-primary/15 text-foreground">
              <img
                src="/charitywater-logo-horizontal-black.jpg"
                alt="charity: water"
                className="h-5 w-auto object-contain"
                data-testid="img-logo"
              />
            </div>
            <div className="leading-tight">
              <div className="font-display text-[15px]">charity: water</div>
              <div className="text-xs text-muted-foreground">Student giving, global impact</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            <a
              href="#impact"
              className="text-sm text-foreground/80 hover:text-foreground transition"
              data-testid="link-impact"
            >
              Impact
            </a>
            <a
              href="#how"
              className="text-sm text-foreground/80 hover:text-foreground transition"
              data-testid="link-how"
            >
              How it works
            </a>
            <a
              href="#donate"
              className="text-sm text-foreground/80 hover:text-foreground transition"
              data-testid="link-donate"
            >
              Donate
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              className="hidden sm:inline-flex"
              data-testid="button-share-header"
              onClick={() => {
                const url = window.location.href;
                const text = "Join my campus in supporting clean water — donate or share.";
                if (navigator.share) {
                  navigator.share({ title: "charity: water", text, url }).catch(() => {});
                } else {
                  navigator.clipboard?.writeText(url);
                }
              }}
            >
              <Share2 className="mr-2 size-4" />
              Share
            </Button>
            <Button
              className="rounded-full"
              data-testid="button-donate-header"
              onClick={() => {
                document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Donate now
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative mx-auto max-w-6xl px-4 pt-6 sm:pt-14">
          <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div
              className="noise relative overflow-hidden rounded-3xl border bg-card shadow-xl lg:col-span-2"
              data-testid="section-hero-photo"
            >
              <img
                src="/charitywater-logo-vertical-white.jpg"
                alt="charity: water"
                className="absolute right-5 top-5 z-10 hidden h-16 w-auto opacity-90 drop-shadow-sm sm:block"
                data-testid="img-hero-logo"
              />
              <div className="relative aspect-[4/5] sm:aspect-[16/7] bg-muted">
                <img
                  src="/src/assets/images/hero-person.webp"
                  alt="People smiling with clean water"
                  className="absolute inset-0 h-full w-full object-cover"
                  data-testid="img-hero-photo"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/45 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/65 via-transparent to-transparent" />

                <div className="relative p-6 sm:p-10">
                  <div
                    className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-foreground/80"
                    data-testid="badge-hero-photo"
                  >
                    <Droplets className="size-3.5 text-primary" />
                    A moment of impact
                  </div>
                  <div className="mt-4 max-w-2xl">
                    <div
                      className="font-display text-3xl leading-[1.05] sm:text-5xl"
                      data-testid="text-hero-photo-title"
                    >
                      Clean water, Everywhere.
                    </div>
                    <div
                      className="mt-2 max-w-xl text-sm text-foreground/80 sm:text-base"
                      data-testid="text-hero-photo-subtitle"
                    >
                      Your small gift helps communities access safe, reliable water—so school, health, and opportunity can be everywhere.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 sm:gap-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="inline-flex items-center gap-2 self-start rounded-full border bg-background/70 px-3 py-1 text-xs text-foreground/80">
                <Sparkles className="size-3.5 text-primary" />
                <span data-testid="text-hero-badge">A 7-day campus challenge</span>
              </div>

              <h1 className="font-display text-3xl leading-[1.05] sm:text-6xl" data-testid="text-hero-title">
                Clean Water Everywhere
                <span className="block text-primary" data-testid="text-hero-title-accent">Help fund sustainable projects.</span>
              </h1>

              <p className="max-w-xl text-base text-foreground/80 sm:text-lg" data-testid="text-hero-subtitle">
                Rally your friends. Donate what you can. Share the story. We turn small, student-sized actions
                into measurable clean-water impact.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="rounded-full"
                  data-testid="button-hero-donate"
                  onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Donate $10 today
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full"
                  data-testid="button-hero-learn"
                  onClick={() => document.getElementById("impact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Learn the impact
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3 sm:gap-6">
                <Stat testId="stat-students" value="1 min" label="to take action" />
                <Stat testId="stat-dollars" value="$10" label="typical student donation" />
                <Stat testId="stat-share" value="1 share" label="can inspire more" />
              </div>

              <div className="text-xs text-muted-foreground" data-testid="text-hero-disclaimer">
                This is a prototype campaign page. Connect your real donation partner later.
              </div>
            </div>

            <div
              className="noise overflow-hidden rounded-3xl border bg-card shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-700 delay-100"
              data-testid="section-hero-video"
            >
              <div className="relative aspect-[4/5] bg-muted">
                <img
                  src="/src/assets/images/hero-video-card.jpg"
                  alt="People with clean water"
                  className="absolute inset-0 h-full w-full object-cover"
                  data-testid="img-hero-video-photo"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="glass noise rounded-2xl p-4" data-testid="card-hero-square">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-xs text-muted-foreground" data-testid="text-hero-video-caption-kicker">
                          Your campus, your ripple
                        </div>
                        <div className="font-display text-lg" data-testid="text-hero-video-caption-title">
                          Make clean water the easiest yes.
                        </div>
                      </div>
                      <div className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground">
                        <Heart className="size-5" strokeWidth={2.25} />
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <Button
                        size="sm"
                        className="rounded-full"
                        data-testid="button-hero-video-donate"
                        onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}
                      >
                        Donate
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full"
                        data-testid="button-hero-video-share"
                        onClick={() => {
                          const url = window.location.href;
                          navigator.clipboard?.writeText(url);
                        }}
                      >
                        Copy link
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA #1 */}
        <section id="donate" className="mx-auto max-w-6xl px-4 pt-12 sm:pt-16">
          <div className="noise overflow-hidden rounded-3xl border bg-card shadow-xl">
            <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_0.9fr]">
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-3xl sm:text-4xl" data-testid="text-cta1-title">
                  Donate like a student. Impact like a movement—globally.
                </h2>
                <p className="text-foreground/80" data-testid="text-cta1-subtitle">
                  Pick an amount, then share your pledge to challenge friends. This page is built to convert
                  fast—no fluff, just action.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[10, 25, 50, 100].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      data-testid={`button-amount-${amt}`}
                      className="rounded-full border bg-background/60 px-4 py-2 text-sm text-foreground/90 transition hover:bg-background"
                      onClick={() => {
                        const el = document.getElementById("amount") as HTMLInputElement | null;
                        if (el) el.value = String(amt);
                      }}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>

                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-stretch">
                  <label className="flex-1" htmlFor="amount">
                    <span className="sr-only">Donation amount</span>
                    <input
                      id="amount"
                      type="number"
                      min={1}
                      placeholder="Custom amount"
                      data-testid="input-amount"
                      className="w-full rounded-2xl border bg-background/60 px-4 py-3 text-base outline-none ring-offset-background transition focus:ring-2 focus:ring-ring"
                    />
                  </label>
                  <Button
                    size="lg"
                    className="rounded-2xl"
                    data-testid="button-donate-primary"
                    onClick={() => {
                      // prototype only
                      alert("Thanks! In a real site this would open checkout.");
                    }}
                  >
                    Continue to donate
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground" data-testid="text-cta1-trust">
                  <ShieldCheck className="size-4 text-primary" />
                  Secure checkout when connected to a real partner.
                </div>
              </div>

              <div className="grid gap-3">
                <Card className="glass rounded-3xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="grid size-10 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <Droplets className="size-5" strokeWidth={2.25} />
                    </div>
                    <div>
                      <div className="text-sm font-medium" data-testid="text-cta1-card1-title">
                        Where your money goes
                      </div>
                      <div className="text-sm text-muted-foreground" data-testid="text-cta1-card1-body">
                        Clean water access, repairs, filters, and community support.
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="glass rounded-3xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="grid size-10 place-items-center rounded-2xl bg-accent/10 text-accent">
                      <Heart className="size-5" strokeWidth={2.25} />
                    </div>
                    <div>
                      <div className="text-sm font-medium" data-testid="text-cta1-card2-title">
                        Student-powered momentum
                      </div>
                      <div className="text-sm text-muted-foreground" data-testid="text-cta1-card2-body">
                        Donations are small by design—sharing does the scaling.
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section id="impact" className="mx-auto max-w-6xl px-4 pt-12 sm:pt-16">
          <div className="grid gap-6 lg:grid-cols-3">
            {[{
              title: "The crisis is real",
              body: "Millions lack reliable access to safe water. The ripple effects hit health, education, and opportunity.",
            },
            {
              title: "Small gifts add up",
              body: "A $10–$25 donation is realistic for students—and it becomes powerful when you mobilize friends.",
            },
            {
              title: "Sharing is part of the impact",
              body: "The fastest way to grow a cause is simple: one share, one challenge, one more donor.",
            }].map((c, i) => (
              <Card
                key={c.title}
                className="glass noise rounded-3xl p-6"
                data-testid={`card-impact-${i}`}
              >
                <div className="font-display text-2xl">{c.title}</div>
                <div className="mt-2 text-sm text-foreground/80">{c.body}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mx-auto max-w-6xl px-4 pt-12 pb-14 sm:pt-16 sm:pb-20">
          <div className="noise overflow-hidden rounded-3xl border bg-card shadow-xl">
            <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-3xl sm:text-4xl" data-testid="text-cta2-title">
                  Start the challenge on your campus.
                </h2>
                <p className="text-foreground/80" data-testid="text-cta2-subtitle">
                  Two clicks: commit + share. We’ll give you a message you can post to group chats and socials.
                </p>

                <div className="grid gap-3">
                  {[{
                    icon: <Heart className="size-5" strokeWidth={2.25} />,
                    title: "1) Donate what you can",
                    body: "Start with $10. It’s the signal that counts.",
                  },
                  {
                    icon: <Share2 className="size-5" strokeWidth={2.25} />,
                    title: "2) Challenge 3 friends",
                    body: "One text + one story post. Make it easy to say yes.",
                  },
                  {
                    icon: <Droplets className="size-5" strokeWidth={2.25} />,
                    title: "3) Track your ripple",
                    body: "Keep momentum for 7 days. Watch the chain grow.",
                  }].map((s, idx) => (
                    <div
                      key={s.title}
                      className="flex items-start gap-3 rounded-2xl border bg-background/55 p-4"
                      data-testid={`row-how-${idx}`}
                    >
                      <div className="grid size-10 place-items-center rounded-2xl bg-primary/10 text-primary">
                        {s.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium" data-testid={`text-how-title-${idx}`}>{s.title}</div>
                        <div className="text-sm text-muted-foreground" data-testid={`text-how-body-${idx}`}>{s.body}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="mt-2 rounded-2xl"
                  data-testid="button-cta2-copy"
                  onClick={() => {
                    const msg =
                      "I’m doing the Clean Water Campus Challenge this week. I donated $10 — will you match me and challenge 3 friends?";
                    navigator.clipboard?.writeText(msg);
                    alert("Copied a share message to your clipboard.");
                  }}
                >
                  Copy a share message
                  <ArrowRight className="ml-2 size-4" />
                </Button>

                <div className="text-xs text-muted-foreground" data-testid="text-cta2-note">
                  Tip: post to your class group chat + one IG story. That combo converts.
                </div>
              </div>

              <div className="grid gap-4">
                <Card className="glass noise rounded-3xl p-6">
                  <div className="text-xs text-muted-foreground">Sample story script</div>
                  <div className="mt-2 font-display text-2xl">“I’m in. Who’s next?”</div>
                  <div className="mt-3 text-sm text-foreground/80">
                    I just donated to bring clean water to communities that need it. If you’re on campus with me,
                    match $10 and tag three friends.
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs">
                    <span className="text-primary">#CleanWaterCampus</span>
                    <span className="text-muted-foreground">7-day challenge</span>
                  </div>
                </Card>

                <Card className="glass rounded-3xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="grid size-10 place-items-center rounded-2xl bg-accent/10 text-accent">
                      <ShieldCheck className="size-5" strokeWidth={2.25} />
                    </div>
                    <div>
                      <div className="text-sm font-medium" data-testid="text-trust-title">Built for Change</div>
                      <div className="text-sm text-muted-foreground" data-testid="text-trust-body">
                        Your donation is secured by SSL encryption and fraud protection.
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t bg-background/40">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-muted-foreground" data-testid="text-footer-copy">
              © {new Date().getFullYear()} charity: water (prototype)
            </div>
            <div className="flex items-center gap-3">
              <a
                className="text-sm text-foreground/80 hover:text-foreground transition"
                href="#donate"
                data-testid="link-footer-donate"
              >
                Donate
              </a>
              <a
                className="text-sm text-foreground/80 hover:text-foreground transition"
                href="#impact"
                data-testid="link-footer-impact"
              >
                Impact
              </a>
              <a
                className="text-sm text-foreground/80 hover:text-foreground transition"
                href="#how"
                data-testid="link-footer-how"
              >
                How it works
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
