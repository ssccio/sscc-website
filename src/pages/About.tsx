import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Target,
  Users,
  Lightbulb,
  Award,
  CheckCircle,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We measure success by the outcomes we deliver, not just the work we do.",
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    description:
      "We work alongside your team, not just for you. Knowledge transfer is built in.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "We stay at the forefront of cloud technology so you can focus on your business.",
  },
  {
    icon: Award,
    title: "Excellence in Execution",
    description:
      "Enterprise-grade quality in everything we deliver, from architecture to documentation.",
  },
];

const differentiators = [
  "Deep specialization in AWS, Kubernetes, and DevOps",
  "Senior consultants only—no junior resources on your project",
  "Transparent, fixed-scope pricing with no surprises",
  "Knowledge transfer built into every engagement",
  "24/7 support for critical production issues",
  "Proven track record with Fortune 500 companies",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About <span className="gradient-text">SSCC</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a team of senior cloud architects and DevOps engineers
              helping enterprises build modern, scalable, and secure cloud
              infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-foreground/90 mb-6">
                SSCC Cloud Consulting was founded with a simple mission: to
                bring enterprise-grade cloud expertise to organizations of all
                sizes.
              </p>
              <p className="text-lg text-foreground/90 mb-6">
                We've seen too many companies struggle with cloud adoption—not
                because of the technology, but because of poor planning,
                fragmented knowledge, and lack of experienced guidance.
              </p>
              <p className="text-lg text-foreground/90">
                Our team combines deep technical expertise with practical
                business understanding to deliver cloud solutions that actually
                work in the real world.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="text-5xl font-bold gradient-text mb-2">150+</div>
              <div className="text-foreground/80 mb-8">
                Successful projects delivered
              </div>
              <div className="text-5xl font-bold gradient-text mb-2">50+</div>
              <div className="text-foreground/80 mb-8">
                Enterprise clients served
              </div>
              <div className="text-5xl font-bold gradient-text mb-2">15+</div>
              <div className="text-foreground/80">
                Years of combined cloud experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              These principles guide everything we do, from how we approach
              projects to how we treat our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-foreground/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SSCC */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose SSCC?
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                There are many cloud consultancies out there. Here's what makes
                us different.
              </p>
              <ul className="space-y-4">
                {differentiators.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 gradient-primary opacity-20 rounded-xl blur-3xl" />
              <div className="relative bg-card border border-border rounded-xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Ready to Get Started?
                </h3>
                <p className="text-foreground/80 mb-6">
                  Schedule a free consultation to discuss your cloud
                  infrastructure challenges and how we can help.
                </p>
                <Button
                  asChild
                  className="w-full gradient-primary hover:opacity-90"
                >
                  <Link to="/contact">
                    Book a Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you're starting your cloud journey or optimizing existing
            infrastructure, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="gradient-primary hover:opacity-90"
            >
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/case-studies">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;