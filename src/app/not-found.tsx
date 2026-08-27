import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center bg-[#141312] text-white">
      <Container className="pt-32 pb-24">
        <span className="font-mono text-xs font-semibold tracking-[0.25em] uppercase text-amber-400 block mb-2" data-figure>
          404 · ERROR
        </span>
        <h1 className="mt-3 max-w-xl font-sans font-black text-4xl sm:text-5xl text-white">
          That page is not here.
        </h1>
        <p className="mt-4 max-w-md text-white/70 text-sm sm:text-base leading-relaxed">
          The link may be out of date, or the page may have moved. The pricing
          and coverage sections are what most people are looking for.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
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
