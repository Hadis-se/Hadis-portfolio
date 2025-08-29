import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              &lt;Developer/&gt;
            </h3>
            <p className="text-muted-foreground">
              Crafting digital experiences with passion
            </p>
          </div>

          <div className="flex space-x-4 mb-6 md:mb-0">
            <a
              href="https://github.com/Hadis-se"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card hover:bg-accent transition-smooth glow-effect hover:animate-glow-pulse"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/hadis-sedaghat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card hover:bg-accent transition-smooth glow-effect hover:animate-glow-pulse"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sedaghat.hadis@gmail.com"
              className="p-2 rounded-full bg-card hover:bg-accent transition-smooth glow-effect hover:animate-glow-pulse"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Made with <Heart className="w-4 h-4 text-red-500" />{" "}
            by Hadis Sedaghat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
