import { cn } from "@/components/utils";

interface BadgeProps {
  children: React.ReactNode;
  tone?: "cyan" | "violet" | "emerald" | "slate";
  className?: string;
}

const tones = {
  cyan: "border-sky-300/30 bg-sky-300/10 text-sky-100",
  violet: "border-violet-300/30 bg-violet-300/10 text-violet-100",
  emerald: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
  slate: "border-slate-300/20 bg-white/5 text-slate-200"
};

export default function Badge({ children, tone = "slate", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
