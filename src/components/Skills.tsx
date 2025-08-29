import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Vue.js",
        "HTML5",
        "CSS3",
        "SASS",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git",
        "Docker",
        "AWS",
        "Vercel",
        "Figma",
        "Jest",
        "Cypress",
        "Webpack",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Team Leadership",
        "Communication",
        "Project Management",
        "Mentoring",
        "Agile/Scrum",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills &{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies
            that I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glow-effect hover:glow-primary transition-smooth bg-card/80 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/20 text-primary hover:bg-primary/30 transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
