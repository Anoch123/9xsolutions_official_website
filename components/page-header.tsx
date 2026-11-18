import { Eyebrow } from "./ui/icons";

export default function SectionHead({
  eyebrow,
  title,
  accent,
  text,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  text?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-6 text-[clamp(2rem,4.4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#12141A]">
        {title}{" "}
        <span className="bg-gradient-to-r from-[#4F66FF] to-[#9333EA] bg-clip-text text-transparent">
          {accent}
        </span>
      </h2>
      {text && (
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-500 sm:text-lg">
          {text}
        </p>
      )}
    </div>
  );
}