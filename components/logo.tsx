import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 group", className)}
      aria-label="GoldLighT Technologies Home"
    >
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gold overflow-hidden">
        <Image
          src="/images/logo.svg"
          alt="GoldLighT logo"
          width={80}
          height={80}
          className="h-full w-full object-contain"
          priority
        />
      </div>
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="font-heading text-lg font-bold tracking-tight">
            Gold<span className="text-gold">LighT</span>
          </span>
          <span className="text-[10px] text-muted tracking-widest uppercase">
            Technologies
          </span>
        </div>
      )}
    </Link>
  );
}
