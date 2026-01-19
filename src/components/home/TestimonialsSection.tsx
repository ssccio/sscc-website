import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "SSCC transformed our infrastructure in ways we didn't think possible. Our deployment time went from days to minutes.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechCorp",
  },
  {
    quote:
      "Their Kubernetes expertise saved us months of trial and error. The team truly understands enterprise requirements.",
    author: "Michael Rodriguez",
    role: "VP of Engineering",
    company: "CloudFirst",
  },
  {
    quote:
      "The cost optimization work alone paid for the entire engagement within 6 months. Highly recommend their AWS team.",
    author: "Emily Thompson",
    role: "Director of IT",
    company: "DataFlow",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from enterprise leaders we've worked with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-card border border-border rounded-xl p-8 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <p className="text-foreground mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}