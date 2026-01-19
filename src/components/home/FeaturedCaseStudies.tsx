import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    id: "fintech-migration",
    industry: "FinTech",
    title: "Cloud Migration for Major Payment Processor",
    challenge: "Migrating legacy on-premise infrastructure to AWS",
    results: ["99.99% uptime", "60% cost reduction", "3x faster deployments"],
    tags: ["AWS", "Terraform", "Kubernetes"],
  },
  {
    id: "healthcare-kubernetes",
    industry: "Healthcare",
    title: "HIPAA-Compliant Kubernetes Platform",
    challenge: "Building a secure container platform for patient data",
    results: ["HIPAA compliant", "50% faster releases", "Zero security incidents"],
    tags: ["Kubernetes", "OpenShift", "Security"],
  },
  {
    id: "ecommerce-scaling",
    industry: "E-Commerce",
    title: "Auto-Scaling Infrastructure for Flash Sales",
    challenge: "Handling 10x traffic spikes during promotional events",
    results: ["10x scale capacity", "Sub-second response", "45% cost savings"],
    tags: ["AWS", "Serverless", "CI/CD"],
  },
];

export function FeaturedCaseStudies() {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              See how we've helped enterprises transform their cloud infrastructure.
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Link
              key={study.id}
              to={`/case-studies/${study.id}`}
              className="group"
            >
              <div
                className="h-full bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:glow-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Badge variant="secondary" className="mb-4">
                  {study.industry}
                </Badge>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {study.challenge}
                </p>

                {/* Results */}
                <div className="space-y-2 mb-6">
                  {study.results.map((result) => (
                    <div key={result} className="flex items-center gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-foreground">{result}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}