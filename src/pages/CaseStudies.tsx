import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, TrendingUp, Target, Lightbulb, CheckCircle } from "lucide-react";

const caseStudiesData = [
  {
    id: "fintech-migration",
    industry: "FinTech",
    title: "Cloud Migration for Major Payment Processor",
    subtitle: "From legacy infrastructure to cloud-native excellence",
    challenge:
      "A leading payment processor was struggling with aging on-premise infrastructure that couldn't keep up with transaction growth. They needed to migrate to AWS while maintaining PCI-DSS compliance and zero downtime.",
    solution:
      "We designed a phased migration strategy using AWS Landing Zone, implemented blue-green deployments for zero-downtime transitions, and established comprehensive monitoring with CloudWatch and Datadog. Terraform modules ensured consistent, repeatable infrastructure.",
    results: [
      { metric: "99.99%", label: "Uptime Achieved" },
      { metric: "60%", label: "Infrastructure Cost Reduction" },
      { metric: "3x", label: "Faster Deployment Cycles" },
      { metric: "0", label: "Security Incidents" },
    ],
    outcomes: [
      "Successfully migrated 200+ microservices to AWS",
      "Achieved PCI-DSS compliance on day one",
      "Reduced mean time to recovery from hours to minutes",
      "Enabled horizontal scaling for peak transaction periods",
    ],
    tags: ["AWS", "Terraform", "Kubernetes", "CI/CD"],
    duration: "8 months",
    teamSize: "6 consultants",
  },
  {
    id: "healthcare-kubernetes",
    industry: "Healthcare",
    title: "HIPAA-Compliant Kubernetes Platform",
    subtitle: "Secure container orchestration for sensitive patient data",
    challenge:
      "A healthcare technology company needed to modernize their application infrastructure while ensuring HIPAA compliance. Their monolithic applications needed to be containerized and deployed on a secure, scalable platform.",
    solution:
      "We implemented OpenShift as the container platform with comprehensive security controls including network policies, pod security standards, and encrypted secrets management. A GitOps workflow with ArgoCD enabled auditable, compliant deployments.",
    results: [
      { metric: "100%", label: "HIPAA Compliant" },
      { metric: "50%", label: "Faster Release Cycles" },
      { metric: "0", label: "Security Incidents" },
      { metric: "40%", label: "Operational Cost Savings" },
    ],
    outcomes: [
      "Established secure, auditable deployment pipelines",
      "Implemented comprehensive logging and monitoring",
      "Created reusable security policies and templates",
      "Trained internal team on platform operations",
    ],
    tags: ["Kubernetes", "OpenShift", "Security", "GitOps"],
    duration: "6 months",
    teamSize: "4 consultants",
  },
  {
    id: "ecommerce-scaling",
    industry: "E-Commerce",
    title: "Auto-Scaling Infrastructure for Flash Sales",
    subtitle: "Handling massive traffic spikes with serverless architecture",
    challenge:
      "An e-commerce platform experienced frequent outages during flash sales and promotional events. Their infrastructure couldn't handle 10x traffic spikes, leading to lost revenue and customer frustration.",
    solution:
      "We redesigned the architecture using AWS Lambda, API Gateway, and DynamoDB for instant scalability. CloudFront and ElastiCache provided edge caching, while EventBridge enabled event-driven processing. Auto-scaling groups handled remaining EC2 workloads.",
    results: [
      { metric: "10x", label: "Scale Capacity" },
      { metric: "<100ms", label: "Response Time" },
      { metric: "45%", label: "Infrastructure Savings" },
      { metric: "100%", label: "Uptime During Sales" },
    ],
    outcomes: [
      "Zero outages during subsequent flash sales",
      "Significantly improved customer experience scores",
      "Reduced on-call incidents by 80%",
      "Pay-per-use model reduced baseline costs",
    ],
    tags: ["AWS", "Serverless", "CI/CD", "Auto-scaling"],
    duration: "4 months",
    teamSize: "3 consultants",
  },
  {
    id: "saas-devops",
    industry: "SaaS",
    title: "DevOps Transformation for B2B Platform",
    subtitle: "From manual deployments to continuous delivery",
    challenge:
      "A B2B SaaS company was deploying manually once a month, leading to long feedback cycles and accumulated technical debt. They needed to implement CI/CD and improve developer productivity.",
    solution:
      "We implemented a complete DevOps transformation including GitHub Actions for CI/CD, Terraform for infrastructure, and ArgoCD for GitOps deployments. Comprehensive testing pipelines and staging environments enabled confident releases.",
    results: [
      { metric: "Daily", label: "Deployment Frequency" },
      { metric: "15min", label: "Build to Deploy Time" },
      { metric: "95%", label: "Test Coverage" },
      { metric: "70%", label: "Faster Time to Market" },
    ],
    outcomes: [
      "Moved from monthly to daily deployments",
      "Established automated testing and security scanning",
      "Reduced production incidents by 60%",
      "Improved developer satisfaction scores",
    ],
    tags: ["CI/CD", "Terraform", "GitOps", "DevOps"],
    duration: "5 months",
    teamSize: "4 consultants",
  },
];

const CaseStudies = () => {
  const { id } = useParams();

  // If viewing a specific case study
  if (id) {
    const caseStudy = caseStudiesData.find((cs) => cs.id === id);

    if (!caseStudy) {
      return (
        <Layout>
          <div className="container mx-auto px-6 py-24 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Case Study Not Found
            </h1>
            <Button asChild>
              <Link to="/case-studies">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Case Studies
              </Link>
            </Button>
          </div>
        </Layout>
      );
    }

    return (
      <Layout>
        {/* Hero */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Case Studies
            </Link>
            <Badge variant="secondary" className="mb-4">
              {caseStudy.industry}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {caseStudy.subtitle}
            </p>
            <div className="flex flex-wrap gap-2">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Results Banner */}
        <section className="py-12 gradient-primary">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {caseStudy.results.map((result) => (
                <div key={result.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-foreground">
                    {result.metric}
                  </div>
                  <div className="text-sm text-primary-foreground/80">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Challenge */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">
                    The Challenge
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  {caseStudy.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">
                    Our Solution
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  {caseStudy.solution}
                </p>
              </div>

              {/* Key Outcomes */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">
                    Key Outcomes
                  </h2>
                </div>
                <ul className="space-y-3">
                  {caseStudy.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Details */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Project Details
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="text-foreground font-medium">
                      {caseStudy.duration}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Team Size</div>
                    <div className="text-foreground font-medium">
                      {caseStudy.teamSize}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Want similar results for your organization?
                </p>
                <Button
                  asChild
                  size="lg"
                  className="gradient-primary hover:opacity-90"
                >
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Case Studies List View
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Client <span className="gradient-text">Success Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              See how we've helped enterprises transform their cloud
              infrastructure and achieve measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudiesData.map((study) => (
              <Link
                key={study.id}
                to={`/case-studies/${study.id}`}
                className="group"
              >
                <div className="h-full bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:glow-sm">
                  <Badge variant="secondary" className="mb-4">
                    {study.industry}
                  </Badge>
                  <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{study.subtitle}</p>

                  {/* Results Preview */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.slice(0, 2).map((result) => (
                      <div key={result.label}>
                        <div className="text-2xl font-bold gradient-text">
                          {result.metric}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {result.label}
                        </div>
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

      {/* CTA */}
      <section className="py-24 bg-card/50 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results.
          </p>
          <Button
            asChild
            size="lg"
            className="gradient-primary hover:opacity-90"
          >
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;