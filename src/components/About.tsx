import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code following best practices",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Turning complex challenges into elegant solutions",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams and stakeholders",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate Front-End developer with 3+ years of experience
            building modern web applications. I love creating digital
            experiences that are both beautiful and functional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in web development started with curiosity and has
              evolved into a deep passion for creating innovative solutions. I
              specialize in React, Node.js, and modern web technologies, always
              staying up-to-date with the latest industry trends.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me contributing to open-source
              projects, mentoring junior developers, or exploring new
              technologies. I believe in writing code that not only works but is
              also readable and maintainable.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="glow-effect hover:glow-primary transition-smooth bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <item.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
