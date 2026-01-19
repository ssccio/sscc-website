import { Link } from "react-router-dom";
import { Cloud, Container, GitBranch, Settings, Code, Zap, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Cloud,
    title: "AWS Cloud Solutions",
    description:
      "Comprehensive AWS architecture, migration, and optimization services for enterprise workloads.",
    href: "/services#aws",
  },
  {
    icon: Container,
    title: "Kubernetes & Containers",
    description:
      "Container orchestration, cluster management, and microservices architecture design.",
    href: "/services#kubernetes",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description:
      "Automated deployment pipelines, testing infrastructure, and DevOps best practices.",
    href: "/services#cicd",
  },
  {
    icon: Settings,
    title: "OpenShift Consulting",
    description:
      "Enterprise Kubernetes platform implementation, security hardening, and operations.",
    href: "/services#openshift",
  },
  {
    icon: Code,
    title: "Terraform & IaC",
    description:
      "Infrastructure as Code implementation, module development, and state management.",
    href: "/services#terraform",
  },
  {
    icon: Zap,
    title: "Serverless Architecture",
    description:
      "Event-driven architectures, Lambda functions, and serverless application design.",
    href: "/services#serverless",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Expert Cloud Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From strategy to implementation, we provide end-to-end cloud solutions
            tailored to your enterprise needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link key={service.title} to={service.href}>
              <Card
                className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow-sm group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}