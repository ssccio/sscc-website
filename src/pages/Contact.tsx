import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Calendar, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to transform your cloud infrastructure? Get in touch with
              our team to discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      placeholder="John Smith"
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Work Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      placeholder="john@company.com"
                      className="bg-secondary border-border"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Company
                  </label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Your company name"
                    className="bg-secondary border-border"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Service Interest
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                  >
                    <SelectTrigger className="bg-secondary border-border">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="aws">AWS Cloud Solutions</SelectItem>
                      <SelectItem value="kubernetes">
                        Kubernetes & Containers
                      </SelectItem>
                      <SelectItem value="cicd">CI/CD Pipelines</SelectItem>
                      <SelectItem value="openshift">
                        OpenShift Consulting
                      </SelectItem>
                      <SelectItem value="terraform">Terraform & IaC</SelectItem>
                      <SelectItem value="serverless">
                        Serverless Architecture
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    placeholder="Tell us about your project and challenges..."
                    rows={5}
                    className="bg-secondary border-border"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-primary hover:opacity-90"
                >
                  Send Message
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info & Booking */}
            <div className="space-y-8">
              {/* Book Consultation */}
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Book a Consultation
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      30-minute discovery call
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Schedule a free consultation to discuss your cloud
                  infrastructure needs and how we can help.
                </p>
                <Button
                  className="w-full gradient-primary hover:opacity-90"
                  onClick={() => {
                    toast({
                      title: "Coming Soon",
                      description:
                        "Calendar integration will be available soon.",
                    });
                  }}
                >
                  Schedule a Call
                </Button>
              </div>

              {/* Contact Details */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <a
                        href="mailto:hello@sscc.cloud"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        hello@sscc.cloud
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <a
                        href="tel:+1-555-123-4567"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Location
                      </div>
                      <div className="text-foreground">
                        Remote-first, serving clients globally
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Primary timezone: PST (UTC-8)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center">
                <p className="text-foreground">
                  <span className="font-semibold">Average response time:</span>{" "}
                  Within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;