import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Clock, User, Calendar } from "lucide-react";

const blogPosts = [
  {
    id: "kubernetes-cost-optimization",
    title: "10 Kubernetes Cost Optimization Strategies for 2024",
    excerpt:
      "Running Kubernetes at scale can get expensive. Here are proven strategies to reduce your cluster costs without sacrificing performance.",
    content: `
Running Kubernetes at scale can quickly become expensive if you're not careful about resource management. After helping dozens of enterprises optimize their Kubernetes costs, we've identified the most impactful strategies.

## 1. Right-Size Your Resources

One of the biggest sources of waste is over-provisioned pods. Use tools like the Vertical Pod Autoscaler (VPA) to analyze actual resource usage and adjust requests/limits accordingly.

## 2. Implement Cluster Autoscaling

Don't pay for nodes you don't need. Configure the Cluster Autoscaler to scale down during low-traffic periods and scale up when demand increases.

## 3. Use Spot Instances for Non-Critical Workloads

AWS Spot Instances, GCP Preemptible VMs, and Azure Spot VMs can reduce costs by up to 90% for fault-tolerant workloads.

## 4. Optimize Container Images

Smaller images mean faster pulls and less storage costs. Use multi-stage builds and distroless base images where possible.

## 5. Implement Pod Disruption Budgets

PDBs ensure high availability while allowing the cluster autoscaler to consolidate workloads efficiently.

The key is continuous monitoring and iteration. Set up dashboards to track cost per namespace and service, and review regularly.
    `,
    author: "Alex Chen",
    role: "Principal Consultant",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Kubernetes",
    tags: ["Kubernetes", "Cost Optimization", "FinOps"],
  },
  {
    id: "terraform-state-management",
    title: "Terraform State Management: A Complete Guide",
    excerpt:
      "State management is one of the most critical aspects of Terraform. Learn best practices for managing state at scale.",
    content: `
Terraform state is the source of truth for your infrastructure. Mismanaging it can lead to drift, conflicts, and even infrastructure outages.

## Understanding Terraform State

State files track the mapping between your configuration and real-world resources. Without proper state management, Terraform can't know what resources exist or need to be modified.

## Remote State Backends

Never store state locally in production. Use remote backends like S3 + DynamoDB, Terraform Cloud, or GCS with locking enabled.

## State Locking

State locking prevents concurrent modifications. Always enable locking to prevent race conditions in team environments.

## State Isolation

Use separate state files for different environments and components. A monolithic state file becomes a bottleneck and single point of failure.

## Handling State Drift

Regularly run terraform plan to detect drift. Implement automated drift detection in your CI/CD pipelines.

Following these practices will save you from state-related disasters down the road.
    `,
    author: "Sarah Kim",
    role: "Senior DevOps Engineer",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "Terraform",
    tags: ["Terraform", "IaC", "Best Practices"],
  },
  {
    id: "aws-landing-zone-design",
    title: "Designing Your AWS Landing Zone: A Modern Approach",
    excerpt:
      "A well-designed landing zone is the foundation for secure, scalable AWS operations. Here's how to get it right.",
    content: `
Your AWS Landing Zone is the foundation upon which all your cloud workloads will run. Getting it right from the start saves enormous effort later.

## What is a Landing Zone?

A landing zone is a pre-configured, secure, multi-account AWS environment based on best practices. It provides guardrails for your organization's cloud journey.

## Key Components

### AWS Organizations
Structure your accounts logically—separate production, development, security, and shared services.

### AWS Control Tower
Automates landing zone setup with built-in guardrails and account provisioning.

### Security Controls
Implement SCPs, GuardDuty, Security Hub, and centralized logging from day one.

### Network Architecture
Design your Transit Gateway, VPCs, and connectivity patterns for scale.

## Common Mistakes

- Not planning for scale
- Insufficient network IP space
- Missing centralized logging
- No cost allocation strategy

A proper landing zone takes time to design but pays dividends in security, compliance, and operational efficiency.
    `,
    author: "Michael Torres",
    role: "AWS Solutions Architect",
    date: "2024-01-05",
    readTime: "12 min read",
    category: "AWS",
    tags: ["AWS", "Architecture", "Security"],
  },
  {
    id: "gitops-argocd-guide",
    title: "Getting Started with GitOps and ArgoCD",
    excerpt:
      "GitOps is revolutionizing how teams deploy applications. Learn how to implement GitOps with ArgoCD.",
    content: `
GitOps uses Git as the single source of truth for infrastructure and application deployments. ArgoCD is one of the most popular tools for implementing GitOps in Kubernetes.

## Why GitOps?

- Declarative deployments
- Version-controlled infrastructure
- Automated synchronization
- Easy rollbacks
- Audit trail for all changes

## ArgoCD Basics

ArgoCD continuously monitors your Git repositories and synchronizes the desired state to your Kubernetes clusters.

## Implementation Steps

1. Install ArgoCD in your cluster
2. Connect your Git repositories
3. Define Application resources
4. Configure sync policies
5. Set up notifications

## Best Practices

- Use Helm or Kustomize for templating
- Implement environment promotion workflows
- Enable sync waves for ordered deployments
- Set up RBAC for access control

GitOps with ArgoCD brings consistency and reliability to your deployment process.
    `,
    author: "Emily Zhang",
    role: "Platform Engineer",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "DevOps",
    tags: ["GitOps", "ArgoCD", "Kubernetes"],
  },
  {
    id: "serverless-patterns-aws",
    title: "Essential Serverless Patterns on AWS",
    excerpt:
      "Building serverless applications requires new architectural patterns. Here are the most important ones to know.",
    content: `
Serverless architectures require different design patterns than traditional applications. Here are the essential patterns every serverless developer should know.

## Event-Driven Architecture

Use EventBridge to decouple services and enable asynchronous processing.

## API Gateway + Lambda

The bread and butter of serverless APIs. Use API Gateway for routing, authentication, and rate limiting.

## Fan-Out Pattern

Use SNS or EventBridge to fan out events to multiple consumers for parallel processing.

## Saga Pattern

Implement distributed transactions using Step Functions to coordinate multiple services.

## CQRS with DynamoDB

Separate read and write models using DynamoDB streams and separate read replicas.

## Circuit Breaker

Implement circuit breakers to handle downstream service failures gracefully.

Mastering these patterns is key to building robust serverless applications at scale.
    `,
    author: "David Park",
    role: "Serverless Specialist",
    date: "2023-12-20",
    readTime: "9 min read",
    category: "Serverless",
    tags: ["AWS", "Serverless", "Lambda"],
  },
];

const Blog = () => {
  const { id } = useParams();

  // Single Blog Post View
  if (id) {
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
      return (
        <Layout>
          <div className="container mx-auto px-6 py-24 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Post Not Found
            </h1>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </Layout>
      );
    }

    return (
      <Layout>
        <article className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <Link
                to="/blog"
                className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Blog
              </Link>

              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>
                    {post.author}, {post.role}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="prose prose-invert prose-lg max-w-none">
                {post.content.split("\n").map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2
                        key={index}
                        className="text-2xl font-bold text-foreground mt-8 mb-4"
                      >
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3
                        key={index}
                        className="text-xl font-semibold text-foreground mt-6 mb-3"
                      >
                        {paragraph.replace("### ", "")}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith("- ")) {
                    return (
                      <li
                        key={index}
                        className="text-muted-foreground ml-4 mb-2"
                      >
                        {paragraph.replace("- ", "")}
                      </li>
                    );
                  }
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-muted-foreground mb-4">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>

              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-border">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-12 p-8 bg-card border border-border rounded-xl text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Need Help With Your Cloud Infrastructure?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our team of experts can help you implement these best
                  practices.
                </p>
                <Button
                  asChild
                  className="gradient-primary hover:opacity-90"
                >
                  <Link to="/contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    );
  }

  // Blog List View
  const categories = [...new Set(blogPosts.map((post) => post.category))];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Cloud Engineering <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Insights, tutorials, and best practices from our team of cloud
              experts.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="cursor-pointer">
              All Posts
            </Badge>
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="cursor-pointer hover:bg-secondary"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group">
                <article className="h-full bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:glow-sm">
                  <Badge variant="secondary" className="mb-4">
                    {post.category}
                  </Badge>
                  <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-card/50 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest cloud engineering
            insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-foreground"
            />
            <Button className="gradient-primary hover:opacity-90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;