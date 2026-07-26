import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-background text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.24em] text-gold mb-4">404</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
          Page not found
        </h1>
        <p className="text-muted text-sm sm:text-base mb-8">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition hover:bg-gold/90"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
