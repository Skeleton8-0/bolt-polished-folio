import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2">
              {portfolioData.personal.name}
            </h3>
            <p className="text-muted-foreground text-sm">
              {portfolioData.personal.title}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-smooth"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.social.email}
              className="p-2 text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end">
              © {currentYear} Made with 
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              by {portfolioData.personal.name}
            </p>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <div className="flex flex-wrap justify-center space-x-6 text-sm text-muted-foreground">
            <button
              onClick={() => {
                const element = document.querySelector('#home');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-primary transition-smooth"
            >
              Back to Top
            </button>
            <button
              onClick={() => window.open(portfolioData.personal.resume, '_blank')}
              className="hover:text-primary transition-smooth"
            >
              Resume
            </button>
            <button
              onClick={() => window.open(portfolioData.social.github, '_blank')}
              className="hover:text-primary transition-smooth"
            >
              Open Source
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};