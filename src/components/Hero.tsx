import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-gradient">
      <div className="section-content text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <h1 className="hero-title mb-6">
            Hey, I'm {portfolioData.personal.name}
          </h1>
          
          <p className="hero-subtitle mb-12">
            {portfolioData.personal.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="min-w-[160px]"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="min-w-[160px]"
            >
              <Mail className="mr-2 w-5 h-5" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-secondary transition-smooth group shadow-card"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-secondary transition-smooth group shadow-card"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            
            <a
              href={portfolioData.personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-secondary transition-smooth group shadow-card"
            >
              <Download className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            
            <a
              href={portfolioData.social.email}
              className="p-3 rounded-lg bg-card hover:bg-secondary transition-smooth group shadow-card"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};