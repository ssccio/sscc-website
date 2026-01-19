import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Cloud,
  Container,
  GitBranch,
  Settings,
  Code,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "aws",
    icon: Cloud,
    title: "AWS Cloud Solutions",
    description:
      "Comprehensive AWS architecture, migration, and optimization services for enterprise workloads. We help you leverage the full power of Amazon Web Services.",
    benefits: [
      "Cloud architecture design & review",
      "Migration planning & execution",
      "Cost optimization & FinOps",
      "Security & compliance (SOC2, HIPAA)",
      "Managed services setup",
      "Disaster recovery planning",
    ],
    useCases: [
      "Legacy system modernization",
      "Multi-region deployments",
      "Hybrid cloud architectures",
    ],
  },
  {
    id: "kubernetes",
    icon: Container,
    title: "Kubernetes & Container Orchestration",
    description:
      "Design, deploy, and manage production-grade Kubernetes clusters. From initial setup to day-2 operations, we ensure your container platform runs smoothly.",
    benefits: [
      "Cluster design & deployment",
      "Microservices architecture",
      "Service mesh implementation",
      "Monitoring & observability",
      "Security hardening",
      "GitOps workflows",
    ],
    useCases: [
      "Containerized application platforms",
      "Multi-tenant environments",
      "Edge computing deployments",
    ],
  },
  {
    id: "cicd",
    icon: GitBranch,
    title: "CI/CD Pipeline Design",
    description:
      "Build robust, automated pipelines that accelerate your software delivery. We implement industry best practices for continuous integration and deployment.",
    benefits: [
      "Pipeline architecture design",
      "Automated testing strategies",
      "Release management",
      "Environment provisioning",
      "Security scanning integration",
      "Deployment automation",
    ],
    useCases: [
      "Rapid feature delivery",
      "Multi-environment deployments",
      "Compliance-driven releases",
    ],
  },
  {
    id: "openshift",
    icon: Settings,
    title: "OpenShift Consulting",
    description:
      "Enterprise Kubernetes with Red Hat OpenShift. We help organizations implement, secure, and operate OpenShift platforms at scale.",
    benefits: [
      "Platform installation & configuration",
      "Operator development",
      "Security policies & RBAC",
      "Integration with enterprise systems",
      "Upgrade planning & execution",
      "Performance tuning",
    ],
    useCases: [
      "Enterprise container platforms",
      "Regulated industry deployments",
      "Hybrid cloud with OpenShift",
    ],
  },
  {
    id: "terraform",
    icon: Code,
    title: "Terraform & Infrastructure as Code",
    description:
      "Manage your infrastructure with code. We implement Terraform best practices, develop reusable modules, and establish IaC governance.",
    benefits: [
      "Module development & registry",
      "State management strategies",
      "Policy as code (Sentinel/OPA)",
      "Multi-cloud provisioning",
      "Drift detection & remediation",
      "Team workflows & collaboration",
    ],
    useCases: [
      "Multi-cloud infrastructure",
      "Reproducible environments",
      "Infrastructure governance",
    ],
  },
  {
    id: "serverless",
    icon: Zap,
    title: "Serverless Architecture",
    description:
      "Build event-driven, scalable applications without managing servers. We design and implement serverless solutions that reduce costs and complexity.",
    benefits: [
      "Serverless architecture design",
      "Lambda/Functions development",
      "Event-driven patterns",
      "API Gateway implementation",
      "Step Functions workflows",
      "Cost optimization",
    ],
    useCases: [
      "API backends",
      "Data processing pipelines",
      "Real-time event processing",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Cloud Services That{" "}
              <span className="gradient-text">Drive Results</span>
            </h1>
            <p className="text-xl text-foreground/80">
              From strategy to implementation, we provide comprehensive cloud
              consulting services tailored to enterprise requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-foreground/80 mb-8">
                    {service.description}
                  </p>

                  {/* Use Cases */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wider mb-3">
                      Common Use Cases
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase) => (
                        <span
                          key={useCase}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="gradient-primary hover:opacity-90">
                    <Link to="/contact">
                      Discuss Your Project
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <div
                  className={`bg-card border border-border rounded-xl p-8 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-6">
                    What We Deliver
                  </h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card/50 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Every enterprise is unique. Let's discuss how we can tailor our
            services to meet your specific requirements.
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
    </Layout>
  );
};

export default Services;