import { ArrowRight, Shield, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import founderImage from '@/assets/founder-vicel.jpg';

const AboutPreview = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Clients Protected" },
    { number: "24/7", label: "Monitoring" },
    { number: "100%", label: "Satisfaction" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Your safety is our top priority in everything we do."
    },
    {
      icon: Target,
      title: "Precision & Excellence",
      description: "We deliver precise, reliable security solutions."
    },
    {
      icon: Award,
      title: "Professional Standards",
      description: "Highly trained, licensed security professionals."
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              About Allegian
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded with a vision to revolutionize the security industry, Allegian combines 
              traditional security expertise with cutting-edge technology. We understand that 
              security is not just about protection—it's about peace of mind.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild size="lg">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Image & Founder Card */}
          <div className="flex flex-col items-center space-y-8">
            {/* Founder Image */}
            <Card className="overflow-hidden shadow-allegian">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={founderImage}
                    alt="Vicel Johnson, Founder of Allegian"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">Vicel Johnson</h3>
                    <p className="text-sm text-white/90">Founder & CEO</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission Statement */}
            <Card className="bg-gradient-card shadow-card-allegian">
              <CardContent className="p-6 text-center">
                <blockquote className="text-lg font-medium text-foreground mb-4">
                  "Our mission is to provide comprehensive, innovative security solutions 
                  that protect our clients' peace of mind."
                </blockquote>
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Security Solutions for Tomorrow</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;