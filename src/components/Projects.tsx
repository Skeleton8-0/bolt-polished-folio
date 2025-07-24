import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";
import { portfolioData, type Project } from "@/data/portfolio";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="group hover:shadow-lg transition-smooth overflow-hidden">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <div className="aspect-video bg-muted flex items-center justify-center">
          {/* Placeholder for project image */}
          <div className="text-6xl text-muted-foreground opacity-50">
            {project.title.charAt(0)}
          </div>
        </div>
        
        {project.featured && (
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              <Star className="w-3 h-3 mr-1 fill-current" />
              Featured
            </Badge>
          </div>
        )}
        
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center space-x-4">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
          {project.liveUrl && (
            <Button
              size="sm"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          )}
        </div>
      </div>

      {/* Project Content */}
      <CardHeader>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </CardHeader>

      <CardContent>
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          {project.liveUrl && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export const Projects = () => {
  const featuredProjects = portfolioData.projects.filter(p => p.featured);
  const otherProjects = portfolioData.projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section bg-muted/30">
      <div className="section-content">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge
            and showcases different aspects of my development skills.
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              More Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* View More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            onClick={() => window.open(portfolioData.social.github, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
