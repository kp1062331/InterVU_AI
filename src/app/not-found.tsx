import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[75vh] items-center bg-paper font-sans">
      <Container className="pt-32 pb-24">
        <p className="eyebrow">404 · Not found</p>
        <h1 className="mt-3 max-w-xl text-display text-ink tracking-tight">
          That page is not here.
        </h1>
        <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-ink-soft">
          The link may be out of date, or the page may have moved. Pricing and
          coverage are what most people are looking for.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/" size="md">
            Back to the home page
          </ButtonLink>
          <ButtonLink href="/pricing" variant="secondary" size="md">
            See pricing
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}
