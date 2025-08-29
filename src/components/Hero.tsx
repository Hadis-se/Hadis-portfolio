import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg1.png";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.15] md:leading-[1.12]">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="inline-block bg-gradient-primary bg-clip-text text-transparent animate-float pb-1">
                Hadis Sedaghat
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Front-End Developer crafting beautiful, functional web experiences
              with modern technologies
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-gradient-primary hover:opacity-90 transition-smooth glow-effect"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="transition-smooth hover:glow-effect"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Hadis-se"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-smooth glow-effect hover:animate-glow-pulse"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/hadis-sedaghat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-smooth glow-effect hover:animate-glow-pulse"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:sedaghat.hadis@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-accent transition-smooth glow-effect hover:animate-glow-pulse"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
