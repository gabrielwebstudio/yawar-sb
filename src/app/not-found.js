import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
          404
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Sidan kunde inte hittas
        </h1>
        <p className="mt-4 text-muted-foreground">
          Sidan du försöker nå finns inte eller har flyttats.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
        >
          Till startsidan
        </Link>
      </div>
    </main>
  );
}