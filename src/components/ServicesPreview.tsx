import { Shield, Camera, Lock, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const services = [
    {
      icon: Shield,
      title: "Physical Security",
      description: "Professional on-site security officers and patrol services to protect your premises 24/7.",
      features: ["Security Officers", "Mobile Patrols", "Access Control"]
    },
    {
      icon: Camera,
      title: "CCTV Surveillance",
      description: "Advanced video surveillance systems with remote monitoring and intelligent analytics.",
      features: ["HD Cameras", "Remote Monitoring", "Cloud Storage"]
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Modern access control solutions including keycard systems and biometric readers.",
      features: ["Keycard Systems", "Biometric Access", "Visitor Management"]
    },
    {
      icon: Users,
      title: "Event Security",
      description: "Comprehensive event security services for corporate functions and private events.",
      features: ["Crowd Control", "VIP Protection", "Event Coordination"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Security Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive security solutions designed to protect your business, 
            property, and people with cutting-edge technology and expert personnel.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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