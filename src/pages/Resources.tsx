import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  FileText,
  Download,
  Lock,
  BookOpen,
  CheckSquare,
  FileCode,
  ArrowRight,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const resources = {
  premium: [
    {
      id: "cloud-migration-playbook",
      type: "whitepaper",
      icon: FileText,
      title: "The Cloud Migration Playbook",
      description:
        "A comprehensive guide to planning and executing enterprise cloud migrations. Includes checklists, timelines, and risk mitigation strategies.",
      pages: "42 pages",
      topics: ["AWS", "Migration", "Strategy"],
    },
    {
      id: "kubernetes-security-guide",
      type: "guide",
      icon: BookOpen,
      title: "Kubernetes Security Best Practices",
      description:
        "In-depth guide covering pod security, network policies, RBAC, secrets management, and compliance frameworks for Kubernetes.",
      pages: "56 pages",
      topics: ["Kubernetes", "Security", "Compliance"],
    },
    {
      id: "terraform-at-scale",
      type: "whitepaper",
      icon: FileText,
      title: "Terraform at Scale",
      description:
        "Enterprise patterns for managing Terraform across multiple teams and environments. Covers state management, modules, and governance.",
      pages: "38 pages",
      topics: ["Terraform", "IaC", "DevOps"],
    },
    {
      id: "cicd-maturity-model",
      type: "guide",
      icon: BookOpen,
      title: "CI/CD Maturity Model",
      description:
        "Assess and improve your continuous delivery capabilities. Includes benchmarks, roadmaps, and implementation guides.",
      pages: "44 pages",
      topics: ["CI/CD", "DevOps", "Automation"],
    },
  ],
  free: [
    {
      id: "aws-cost-checklist",
      type: "checklist",
      icon: CheckSquare,
      title: "AWS Cost Optimization Checklist",
      description:
        "25-point checklist to identify cost savings opportunities in your AWS environment.",
      format: "PDF",
      topics: ["AWS", "FinOps"],
    },
    {
      id: "kubernetes-readiness",
      type: "checklist",
      icon: CheckSquare,
      title: "Kubernetes Readiness Assessment",
      description:
        "Evaluate if your organization is ready for Kubernetes adoption with this comprehensive checklist.",
      format: "PDF",
      topics: ["Kubernetes", "Assessment"],
    },
    {
      id: "terraform-module-template",
      type: "template",
      icon: FileCode,
      title: "Terraform Module Starter Template",
      description:
        "Well-structured Terraform module template with documentation, testing, and CI/CD integration.",
      format: "ZIP",
      topics: ["Terraform", "Templates"],
    },
    {
      id: "incident-response-template",
      type: "template",
      icon: FileCode,
      title: "Incident Response Runbook Template",
      description:
        "Customizable runbook template for managing and documenting cloud infrastructure incidents.",
      format: "Markdown",
      topics: ["DevOps", "Operations"],
    },
    {
      id: "cloud-architecture-diagrams",
      type: "template",
      icon: FileCode,
      title: "Cloud Architecture Diagram Templates",
      description:
        "Professional diagram templates for AWS, Kubernetes, and multi-cloud architectures.",
      format: "Draw.io",
      topics: ["Architecture", "Templates"],
    },
  ],
};

const Resources = () => {
  const [gateDialogOpen, setGateDialogOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<typeof resources.premium[0] | null>(null);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const { toast } = useToast();

  const handlePremiumDownload = (resource: typeof resources.premium[0]) => {
    setSelectedResource(resource);
    setGateDialogOpen(true);
  };

  const handleGatedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Download Link Sent!",
      description: `Check your email for the download link to "${selectedResource?.title}".`,
    });
    setGateDialogOpen(false);
    setEmail("");
    setCompany("");
  };

  const handleFreeDownload = (title: string) => {
    toast({
      title: "Download Started",
      description: `Your download of "${title}" has started.`,
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Resources & <span className="gradient-text">Downloads</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Whitepapers, guides, checklists, and templates to help you
              succeed with cloud infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Premium Resources */}
      <section id="premium" className="pb-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Lock className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              Premium Resources
            </h2>
            <Badge className="gradient-primary">Email Required</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.premium.map((resource) => (
              <div
                key={resource.id}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <resource.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs uppercase">
                        {resource.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {resource.pages}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {resource.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    <Button
                      onClick={() => handlePremiumDownload(resource)}
                      className="gradient-primary hover:opacity-90"
                    >
                      <Download className="mr-2 w-4 h-4" />
                      Get Free Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section id="free" className="pb-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <Download className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              Free Resources
            </h2>
            <Badge variant="outline">No Email Required</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.free.map((resource) => (
              <div
                key={resource.id}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <resource.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs uppercase">
                    {resource.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {resource.format}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {resource.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  onClick={() => handleFreeDownload(resource.title)}
                  className="w-full"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download Free
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card/50 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Need Custom Guidance?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team can provide personalized recommendations for your specific
            cloud challenges.
          </p>
          <Button
            asChild
            size="lg"
            className="gradient-primary hover:opacity-90"
          >
            <Link to="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Gated Content Dialog */}
      <Dialog open={gateDialogOpen} onOpenChange={setGateDialogOpen}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">
              Get Your Free Download
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Enter your email to receive "{selectedResource?.title}".
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleGatedSubmit} className="space-y-4 mt-4">
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Work Email *
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@company.com"
                className="mt-1 bg-secondary border-border"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="text-sm font-medium text-foreground"
              >
                Company (Optional)
              </label>
              <Input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Your company name"
                className="mt-1 bg-secondary border-border"
              />
            </div>
            <Button type="submit" className="w-full gradient-primary hover:opacity-90">
              Send Download Link
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Resources;