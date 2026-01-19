const companies = [
  "TechCorp",
  "CloudFirst",
  "DataFlow",
  "SecureNet",
  "ScaleTech",
  "InnoCloud",
];

export function TrustedBySection() {
  return (
    <section className="py-16 border-y border-border bg-card/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by leading enterprises worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {companies.map((company) => (
            <div
              key={company}
              className="text-xl md:text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}