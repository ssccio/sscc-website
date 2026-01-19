import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Server, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[15%] animate-float opacity-20">
          <Cloud className="w-16 h-16 text-primary" />
        </div>
        <div className="absolute top-40 right-[20%] animate-float delay-500 opacity-20">
          <Server className="w-12 h-12 text-primary" />
        </div>
        <div className="absolute bottom-40 left-[25%] animate-float delay-1000 opacity-20">
          <GitBranch className="w-14 h-14 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Enterprise Cloud Solutions
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Transform Your{" "}
            <span className="gradient-text">Cloud Infrastructure</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            SSCC delivers expert AWS, Kubernetes, and DevOps consulting to help
            enterprises modernize, scale, and optimize their cloud operations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              asChild
              size="lg"
              className="gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6 glow"
            >
              <Link to="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-border hover:bg-secondary"
            >
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">150+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">99.9%</div>
              <div className="text-sm text-muted-foreground mt-1">Uptime Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">40%</div>
              <div className="text-sm text-muted-foreground mt-1">Cost Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}