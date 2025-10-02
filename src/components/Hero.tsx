import { ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/welcome.jpg';

const Hero = () => {
  const features = [
    "Advanced Technology Solutions",
    "Professional Security Services",
    "Advanced Technology Solutions",
    "Distribution and Installation"
  ];

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Trusted Security Solutions
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Security Solutions for
              <span className="block text-accent"> Tomorrow</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Protect what matters most with Allegian's comprehensive security services. 
              Professional, reliable, and innovative solutions tailored to your needs.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-white/90">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-primary hover:bg-white/10" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>

          {/* Stats Card - Why Choose Allegian */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-allegian max-w-md w-full">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Why Choose Allegian?
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">43+</div>
                  <div className="text-sm text-white/80">Years Expertise</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-sm text-white/80">Black-Owned</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">Inclusive</div>
                  <div className="text-sm text-white/80">Growth Focus</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">Integrity</div>
                  <div className="text-sm text-white/80">& Trust</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-center text-sm text-white/80">
                  "More than a provider — a partner in progress."
                </p>
                <p className="text-center text-xs text-white/60 mt-2">
                  – Allegian Commitment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
