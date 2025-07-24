import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Contact = () => {
  return (
    <section id="contact" className="section bg-muted/30">
      <div className="section-content">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects,
            or just having a chat about technology and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            
            <div className="space-y-6">
              {/* Email */}
              <Card>
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href={portfolioData.social.email}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      {portfolioData.personal.location}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-medium">Follow Me</h4>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(portfolioData.social.linkedin, '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(portfolioData.social.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div>
            <Card>
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Ready to work together?
                  </h3>
                  <p className="text-muted-foreground">
                    I'm currently available for freelance work and full-time opportunities.
                    Let's discuss how we can bring your ideas to life!
                  </p>
                </div>

                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open(portfolioData.social.email)}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open(portfolioData.personal.resume, '_blank')}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Download Resume
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Typically responds within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};