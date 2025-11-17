// app/hackathon/page.tsx
// Claude Builder Club — UC Irvine
// Light theme matching WhyJoinCards style
// Accent #da7756, gradient bg from zinc-50 to orange-50

"use client";

import React from "react";
import Link from "next/link";
import Header from "../../components/ui/Header";
import { motion } from "framer-motion";

import {
  CalendarDays,
  MapPin,
  Users,
  Clock,
  Trophy,
  Megaphone,
  Rocket,
  ExternalLink,
  Sparkles,
} from "lucide-react";

// -----------------------------------------------------------------------------
// Lightweight UI shims (Button, Card, Badge, Separator, Accordion)
// -----------------------------------------------------------------------------
function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

// Button shim with light theme + accent
function Button({
  children,
  variant = "default",
  size = "default",
  asChild = false,
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  size?: "default" | "lg";
  asChild?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent";
  const variants = {
    // Primary: Accent bg, white text
    default:
      "bg-[#da7756] text-white hover:opacity-90 focus:ring-[#da7756] border border-transparent shadow-md",
    // Outline: White bg with accent border/text
    outline:
      "bg-white text-[#da7756] border-2 border-[#da7756] hover:bg-[#da7756]/5 focus:ring-[#da7756]",
  } as const;
  const sizes = { default: "h-9 px-4", lg: "h-11 px-5" } as const;
  const classes = cx(base, variants[variant], sizes[size], className);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as any, {
      className: cx((children as any).props?.className, classes),
      ...props,
    });
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

// Card shim — white card with shadow
function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        "rounded-2xl border-2 shadow-xl",
        "bg-white border-[#da7756]/20 hover:border-[#da7756]/50 transition-all duration-300",
        className
      )}
      {...props}
    />
  );
}
function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        "p-6 border-b border-[#da7756]/20 bg-gradient-to-r from-[#da7756]/5 to-transparent",
        className
      )}
      {...props}
    />
  );
}
function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cx("text-xl font-bold text-gray-900", className)}
      {...props}
    />
  );
}
function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cx("text-sm text-gray-600 mt-1", className)} {...props} />
  );
}
function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cx("p-6 pt-4", className)} {...props} />;
}

// Badge — accent pill
function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        "bg-[#da7756] text-white shadow-md",
        className
      )}
      {...props}
    />
  );
}

function Separator({ className }: { className?: string }) {
  return <hr className={cx("my-4 h-px border-0 bg-gray-200", className)} />;
}

// Accordion using <details/summary>
const Accordion = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={cx("space-y-3", className)}>{children}</div>;
const AccordionItem = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) => (
  <details
    className="rounded-2xl border-2 border-gray-200 p-4 bg-white hover:border-[#da7756]/30 transition-all"
    data-value={value}
  >
    {children}
  </details>
);
const AccordionTrigger = ({ children }: { children: React.ReactNode }) => (
  <summary className="cursor-pointer select-none text-base font-semibold text-gray-900 outline-none">
    {children}
  </summary>
);
const AccordionContent = ({ children }: { children: React.ReactNode }) => (
  <div className="pt-3 text-sm text-gray-600">{children}</div>
);

// -----------------------------------------------------------------------------
// Config
// -----------------------------------------------------------------------------
const HACKATHON = {
  title: "CBC @ UCI Hackathon",
  dateLabel: "Saturday, Nov 22, 2025",
  timeLabel: "Half day",
  locationLabel: "UC Irvine",
  theme: "Claude-powered builds",
  expectedSize: "~120 students",
  registerHref: "https://luma.com/uh9arhfk",
  instagram: "https://instagram.com/claudebuildersuci",
  linkedin: "https://www.linkedin.com/company/claude-builder-club-uci/",
  discord: "https://discord.gg/",
};

// -----------------------------------------------------------------------------
// Countdown (client-only)
// -----------------------------------------------------------------------------
export function formatCountdown(ms: number): string {
  const d = Math.floor(ms / (1000 * 60 * 60 * 24));
  const h = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const m = Math.floor((ms / (1000 * 60)) % 60);
  return `${d}d ${h}h ${m}m`;
}

function Countdown() {
  const target = React.useMemo(
    () => new Date("2025-11-22T09:00:00-08:00").getTime(),
    []
  );
  const [timeLeft, setTimeLeft] = React.useState<string>("");

  React.useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const delta = Math.max(target - now, 0);
      setTimeLeft(formatCountdown(delta));
    };
    tick();
    const id = window.setInterval(tick, 60 * 1000);
    return () => window.clearInterval(id);
  }, [target]);

  if (!timeLeft) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-3 py-1 text-sm text-gray-500 shadow-sm">
        <Clock className="h-4 w-4" />
        <span className="tabular-nums">—</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#da7756]/30 bg-[#da7756]/5 px-3 py-1 text-sm text-gray-900 shadow-sm">
      <Clock className="h-4 w-4 text-[#da7756]" />
      <span className="font-medium">Countdown:</span>
      <span className="tabular-nums font-semibold">{timeLeft}</span>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Page
// -----------------------------------------------------------------------------
export default function HackathonPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-50 to-orange-50">
      <Header />

      <main className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-start gap-6 rounded-2xl border-2 border-[#da7756]/20 bg-white p-8 md:p-12 shadow-xl">
            <Badge className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" />
              {HACKATHON.theme}
            </Badge>
            <motion.h1
              className="text-4xl font-bold tracking-tight md:text-6xl text-gray-900"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {HACKATHON.title}
            </motion.h1>
            <p className="max-w-2xl text-lg text-gray-600">
              Build with Claude alongside fellow UCI makers. Meet mentors, ship
              something scrappy, and have fun. Sponsors, judges, and full
              schedule are coming soon.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm">
              <Pill>
                <CalendarDays className="h-4 w-4" /> {HACKATHON.dateLabel}
              </Pill>
              <Pill>
                <MapPin className="h-4 w-4" /> {HACKATHON.locationLabel}
              </Pill>
              <Pill>
                <Users className="h-4 w-4" /> {HACKATHON.expectedSize}
              </Pill>
              <Countdown />
            </div>

            <div className="mt-2 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={HACKATHON.registerHref}>Register interest</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={HACKATHON.discord}>Join Discord</Link>
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Info cards */}
        <section className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#da7756]/10 flex items-center justify-center">
                    <Rocket className="h-5 w-5 text-[#da7756]" />
                  </div>
                  Basics
                </CardTitle>
                <CardDescription>Fast, fun, beginner-friendly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <InfoRow
                  icon={<CalendarDays className="h-4 w-4 text-[#da7756]" />}
                  label="Date"
                  value={HACKATHON.dateLabel}
                />
                <InfoRow
                  icon={<Clock className="h-4 w-4 text-[#da7756]" />}
                  label="Duration"
                  value={HACKATHON.timeLabel}
                />
                <InfoRow
                  icon={<MapPin className="h-4 w-4 text-[#da7756]" />}
                  label="Location"
                  value={HACKATHON.locationLabel}
                />
                <InfoRow
                  icon={<Users className="h-4 w-4 text-[#da7756]" />}
                  label="Attendees"
                  value={HACKATHON.expectedSize}
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#da7756]/10 flex items-center justify-center">
                    <Megaphone className="h-5 w-5 text-[#da7756]" />
                  </div>
                  Announcements
                </CardTitle>
                <CardDescription>Timeline & updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <Bullet>Flyers going up this week.</Bullet>
                <Bullet>Hackathon announcement on Instagram next week.</Bullet>
                <Bullet>
                  Full schedule, judges, and prizes revealed soon.
                </Bullet>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#da7756]/10 flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-[#da7756]" />
                  </div>
                  Prizes
                </CardTitle>
                <CardDescription>To be announced</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <SkeletonLine />
                <SkeletonLine />
                <SkeletonLine />
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Schedule placeholder */}
        <section className="mb-12">
          <header className="mb-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Schedule (TBD)
            </h2>
            <p className="text-gray-600 mt-2">Full timeline coming soon</p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Morning</CardTitle>
                  <CardDescription>
                    Check-in, kickoff, team formation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <SkeletonLine />
                  <SkeletonLine />
                  <SkeletonLine />
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Afternoon</CardTitle>
                  <CardDescription>Building, demos, awards</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <SkeletonLine />
                  <SkeletonLine />
                  <SkeletonLine />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Judges & Sponsors placeholders */}
        <section className="mb-12 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Judges (TBD)</CardTitle>
                <CardDescription>Announcing soon</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <AvatarSkeleton />
                <AvatarSkeleton />
                <AvatarSkeleton />
                <AvatarSkeleton />
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Sponsors (TBD)</CardTitle>
                <CardDescription>
                  Interested in sponsoring? Email us.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <LogoSkeleton />
                <LogoSkeleton />
                <LogoSkeleton />
                <LogoSkeleton />
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* FAQ */}
        <motion.section
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
            FAQ
          </h2>
          <Accordion>
            <AccordionItem value="who">
              <AccordionTrigger>Who can participate?</AccordionTrigger>
              <AccordionContent>
                All UCI students are welcome — beginners encouraged. We'll share
                team-forming time at kickoff.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="theme">
              <AccordionTrigger>What are we building?</AccordionTrigger>
              <AccordionContent>
                Anything that showcases Claude creatively: tools, agents, apps,
                plugins, experiments. Solo or team.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="tools">
              <AccordionTrigger>What tools are allowed?</AccordionTrigger>
              <AccordionContent>
                Bring your stack. We'll share any credits or starter templates
                we can provide as we confirm sponsors.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="registration">
              <AccordionTrigger>How do I register?</AccordionTrigger>
              <AccordionContent>
                Tap{" "}
                <Link
                  href={HACKATHON.registerHref}
                  className="underline underline-offset-4 text-[#da7756] font-semibold hover:text-[#da7756]/80"
                >
                  Register interest
                </Link>{" "}
                and we'll email you as soon as formal sign-ups open.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.section>

        <Separator className="mb-10" />

        {/* Socials */}
        <section className="flex flex-wrap items-center gap-3 text-sm">
          <span className="text-gray-600 font-medium">Follow updates:</span>
          <SocialLink href={HACKATHON.instagram} label="Instagram" />
          <SocialLink href={HACKATHON.linkedin} label="LinkedIn" />
          <SocialLink href={HACKATHON.discord} label="Discord" />
        </section>
      </main>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Presentational helpers with light theme
// -----------------------------------------------------------------------------
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-3 py-1 text-gray-700 shadow-sm">
      {children}
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-gray-600">
        {icon}
        <span>{label}</span>
      </div>
      <span className="font-semibold text-gray-900">{value}</span>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-block h-2 w-2 rounded-full bg-[#da7756]" />
      <span className="text-gray-700">{children}</span>
    </div>
  );
}

function SkeletonLine() {
  return <div className="h-3 w-full rounded bg-gray-200 animate-pulse" />;
}

function AvatarSkeleton() {
  return (
    <div className="aspect-square w-full rounded-xl bg-gray-200 animate-pulse" />
  );
}

function LogoSkeleton() {
  return (
    <div className="aspect-video w-full rounded-xl bg-gray-200 animate-pulse" />
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1 rounded-full border-2 border-gray-200 bg-white px-3 py-1 text-gray-700 hover:border-[#da7756]/30 hover:bg-[#da7756]/5 transition-all shadow-sm"
      target="_blank"
      rel="noreferrer"
    >
      <span className="font-medium">{label}</span>
      <ExternalLink className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
    </Link>
  );
}

// -----------------------------------------------------------------------------
// Runtime tests
// -----------------------------------------------------------------------------
if (process.env.NODE_ENV !== "production") {
  console.assert(
    formatCountdown(0) === "0d 0h 0m",
    "formatCountdown(0) should be 0d 0h 0m"
  );

  const oneDayTwoHoursThirty = (24 * 60 + 120 + 30) * 60 * 1000;
  console.assert(
    formatCountdown(oneDayTwoHoursThirty) === "1d 2h 30m",
    `formatCountdown mismatch: ${formatCountdown(oneDayTwoHoursThirty)}`
  );

  const fiftyNineMinutes = 59 * 60 * 1000;
  console.assert(
    formatCountdown(fiftyNineMinutes) === "0d 0h 59m",
    `formatCountdown(59m) mismatch: ${formatCountdown(fiftyNineMinutes)}`
  );
}
