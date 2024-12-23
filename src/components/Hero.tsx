import { Button } from "./ui/button";

const Hero = () => {
  const handleLearnMore = () => {
    window.open("https://www.bing.com/search?pglt=385&q=who+is+theadicoder&cvid=eaf042acd5df4cf7b908f8457e8bf877&gs_lcrp=EgRlZGdlKgYIARBFGDsyBggAEEUYOTIGCAEQRRg7MgYIAhBFGDzSAQg0NjI0ajBqMagCALACAA&FORM=ANNTA1&PC=EDGEDB", "_blank");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-accent/20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in opacity-0 [animation-delay:200ms]">
          Empowering Your Digital Transformation
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in opacity-0 [animation-delay:400ms]">
          We help businesses leverage cutting-edge technology to drive growth and
          innovation in the digital age.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0 [animation-delay:600ms]">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
            onClick={handleLearnMore}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;