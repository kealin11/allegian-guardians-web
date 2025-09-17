import { ArrowRight, Phone, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Free Security Assessment",
      description: "Get a comprehensive evaluation of your current security needs"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock monitoring and emergency response services"
    },
    {
      icon: Phone,
      title: "Immediate Response",
      description: "Quick deployment of security solutions when you need them most"
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Don't wait until it's too late. Get a free security consultation today 
            and discover how Allegian can protect what matters most to you.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/80 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                Get Free Quote Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-primary hover:bg-white/10" asChild>
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-4 pt-4">
            <div className="flex items-center text-white/80">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">Call: (555) 123-4567</span>
            </div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="flex items-center text-white/80">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm">24/7 Emergency: (555) 911-SAFE</span>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm mb-4">Trusted by 500+ businesses across the region</p>
          <div className="flex justify-center items-center space-x-8 text-white/40">
            <div className="text-xs">Licensed & Insured</div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="text-xs">Professional Standards</div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="text-xs">24/7 Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;