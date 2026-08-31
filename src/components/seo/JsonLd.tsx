/**
 * Renders one `<script type="application/ld+json">` from a JSON-serializable
 * object (or array of objects, for multiple schema blocks in one page).
 *
 * Input is always internal, statically-authored data (site config, blog/company
 * data, page copy) — never raw user input — so `dangerouslySetInnerHTML` here
 * is safe. `<` is still escaped defensively so a stray value can't prematurely
 * close the surrounding `<script>` tag.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
