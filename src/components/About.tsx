import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio";

export const About = () => {
  const skillsByCategory = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof portfolioData.skills>);

  return (
    <section id="about" className="section">
      <div className="section-content">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me, my background, and my current skills
            in programming and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get to know me!</h3>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                {portfolioData.about.bio}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {portfolioData.about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{highlight}</p>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-8">
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-medium"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
            
            <div className="space-y-6">
              {Object.entries(skillsByCategory).map(([category, skills]) => (
                <Card key={category}>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-4 text-primary">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge 
                          key={skill.name} 
                          variant="secondary"
                          className="px-3 py-1 text-sm"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                I'm always learning new technologies and staying up-to-date with the latest
                industry trends. Currently exploring AI/ML integration in web applications
                and advanced cloud architectures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};