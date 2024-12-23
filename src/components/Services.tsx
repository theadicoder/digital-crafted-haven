import {
  Cloud,
  Code,
  Database,
  LineChart,
  Lock,
  Smartphone,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const services = [
  {
    title: "Cloud Computing",
    description:
      "Scalable cloud solutions to power your business infrastructure.",
    icon: Cloud,
  },
  {
    title: "Web Development",
    description: "Custom web applications tailored to your needs.",
    icon: Code,
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications.",
    icon: Smartphone,
  },
  {
    title: "Data Analytics",
    description: "Turn your data into actionable insights.",
    icon: LineChart,
  },
  {
    title: "Database Management",
    description: "Efficient database design and optimization.",
    icon: Database,
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with our security solutions.",
    icon: Lock,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            We offer a comprehensive suite of IT services to help your business
            thrive in the digital world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;