import { Shield, Camera, Lock, Users, Clock, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import servicesBg from '@/assets/services-bg.jpg';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Physical Security",
      description: "Comprehensive on-site security services including trained security officers, patrol services, and access control management.",
      features: ["24/7 Security Officers", "Mobile Patrols", "Access Control", "Emergency Response"]
    },
    {
      icon: Camera,
      title: "CCTV Surveillance",
      description: "Advanced video surveillance systems with remote monitoring, analytics, and cloud storage solutions.",
      features: ["HD Cameras", "Remote Monitoring", "Motion Detection", "Cloud Storage"]
    },
    {
      icon: Lock,
      title: "Access Control Systems",
      description: "Modern access control solutions including keycard systems, biometric readers, and smart locks.",
      features: ["Keycard Systems", "Biometric Access", "Smart Locks", "Visitor Management"]
    },
    {
      icon: Users,
      title: "Event Security",
      description: "Professional event security services for corporate events, concerts, and private functions.",
      features: ["Crowd Control", "VIP Protection", "Event Coordination", "Emergency Planning"]
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Round-the-clock monitoring services with immediate response to security alerts and incidents.",
      features: ["Live Monitoring", "Instant Alerts", "Response Team", "Incident Reports"]
    },
    {
      icon: Zap,
      title: "Security Consulting",
      description: "Expert security assessments and consulting services to identify vulnerabilities and improve security posture.",
      features: ["Risk Assessment", "Security Audits", "Custom Solutions", "Training Programs"]
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
            Our Security Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive security solutions tailored to protect your business, 
            property, and people with cutting-edge technology and expert personnel.
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