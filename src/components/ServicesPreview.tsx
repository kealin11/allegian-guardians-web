import { Shield, Building, Wrench, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const services = [
    {
      icon: Shield,
      title: "Products & Services",
      description: "Comprehensive suite of solutions tailored for commercial, financial, industrial, and governmental sectors.",
      features: [
        "High-performance system distribution",
        "Integrated solutions installation",
        "Training & safety operations"
      ]
    },
    {
      icon: Building,
      title: "Intrusion Detection",
      description: "Advanced products to safeguard facilities with the latest security technology.",
      features: [
        "Alarm systems & CCTV",
        "Electric fencing",
        "Gate automation"
      ]
    },
    {
      icon: Wrench,
      title: "Professional Services",
      description: "Expert support services to build, maintain, and enhance your security infrastructure.",
      features: [
        "Manufacturing & installation",
        "Training & servicing",
        "Consulting & quality assurance"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Products & Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Delivering high-performance systems, advanced intrusion detection, and professional services designed to secure and empower organizations across all sectors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="h-full shadow-card-allegian hover:shadow-allegian transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;