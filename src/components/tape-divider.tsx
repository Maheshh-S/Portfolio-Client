import { tapeRows } from "@/lib/content";

export function TapeDivider() {
  return (
    <section className="tape-divider" aria-hidden="true">
      {tapeRows.map((row) => (
        <div className={`tape ${row.className}`} key={row.className}>
          <div className="tape-track">
            {[...row.items, ...row.items, ...row.items].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
