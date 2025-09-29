import { Shield, Wrench, BookOpen, Settings, ClipboardCheck, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import servicesBg from '@/assets/services-bg.jpg';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Products & Services",
      description: "Allegian offers a comprehensive suite of services tailored for commercial, financial, industrial, and governmental sectors.",
      features: [
        "Distribution of high-performance systems",
        "Installation & commissioning of integrated solutions",
        "Training on system operation & safety",
        "Servicing & maintenance",
        "Risk assessments & consulting",
        "Quality assurance & compliance"
      ]
    },
    {
      icon: Building,
      title: "Intrusion Detection",
      description: "Advanced security products to protect facilities with cutting-edge technology.",
      features: [
        "Alarm systems and advanced CCTV surveillance equipment",
        "Electric fencing",
        "Gate automation",
        "Advanced electronic locks"
      ]
    },
    {
      icon: Wrench,
      title: "Professional Services",
      description: "Expert services designed to support and enhance security infrastructures.",
      features: [
        "Manufacturing",
        "Installation",
        "Training",
        "Servicing",
        "Consulting",
        "Quality assurance"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${servicesBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Products & Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive solutions tailored to protect and empower commercial, financial, industrial, and governmental sectors.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full shadow-card-allegian hover:shadow-allegian transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get a customized security assessment and quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;