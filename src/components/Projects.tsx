import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Dashboard Management for smart-lock",
      description:
        "Developed a management system to control users, keys, and locks, enabling the opening and closing of locks at specific locations using Remix, Nest.js, MySQL,Prisma and Ant Design.",
      image: "/desktopApp.png",
      technologies: [
        "React",
        "Node.js",
        "Prisma",
        "SASS",
        "Nest.js",
        "Node.js",
        "Next.js",
      ],
      liveUrl: "https://sl.tanserlock.com/",
    },
    {
      title: "Mobile app to manage smart_keys",
      description:
        "Developed a mobile app for users to control keys and locks, utilizing Remix, React Native, MySQL, and Prisma.",
      image: "/mobileApp.png",
      technologies: ["React Native", "Node.js", "Prisma", "SASS"],
      liveUrl: "https://sl.tanserlock.com/",
    },
    {
      title: "Trading Performance Dashboard",
      description:
        "A responsive trading performance dashboard featuring real-time analytics, interactive charts, and a clean, user-friendly interface for portfolio monitoring and insights.",
      image: "/1.png",
      technologies: [
        "React",
        "Node.js",
        "Prisma",
        "SASS",
        "Nest.js",
        "Node.js",
        "Next.js",
      ],
      liveUrl: "",
    },
    {
      title: "Bot Management Dashboard",
      description:
        "A bot management dashboard with a clean, responsive interface for monitoring, configuring, and controlling multiple trading bots in real time.",
      image: "/2.png",
      technologies: [
        "React",
        "Node.js",
        "Prisma",
        "SASS",
        "Nest.js",
        "Node.js",
        "Next.js",
      ],
      liveUrl: "",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: [
        "React",
        "TypeScript",
        "Firebase",
        "Material-UI",
        "Socket.io",
      ],
      liveUrl: "https://task-tracker-xbbd.onrender.com",
    },
    {
      title: "AI Translator",
      description:
        "A translator app that uses AI to translate text from one language to another five different languages",
      image: "translator.webp",
      technologies: ["React", "TypeScript", "CSS Grid", "OpenAI"],
      liveUrl: "https://ai-translation-app.onrender.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of projects that showcase my skills and passion for
            creating innovative web solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden glow-effect hover:glow-primary transition-smooth bg-card/80 backdrop-blur-sm group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:opacity-90"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
