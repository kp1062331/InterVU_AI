import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, type BreadcrumbItem } from "@/lib/seo";

/**
 * Visual breadcrumb trail + matching `BreadcrumbList` JSON-LD, so the crawlable
 * path structure and the schema always agree. "Home" is implicit — pass the
 * remaining trail only, e.g. `[{ name: "Blogs", path: "/blogs" }, { name: post.title, path: ... }]`.
 */
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const trail: BreadcrumbItem[] = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <nav
        aria-label="Breadcrumb"
        className="mb-6 flex flex-wrap items-center gap-2 text-xs text-ink-muted"
      >
        {trail.map((item, i) => {
          const isLast = i === trail.length - 1;
          return (
            <span key={item.path} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {isLast ? (
                <span className="max-w-[240px] truncate font-semibold text-ink sm:max-w-md">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="transition-colors hover:text-brand"
                >
                  {item.name}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
