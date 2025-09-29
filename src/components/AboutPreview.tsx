import { ArrowRight, Shield, Target, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import founderImage from '@/assets/founder-vicel.jpg';

const AboutPreview = () => {
  const stats = [
    { number: "43+", label: "Years Experience" },
    { number: "100%", label: "Black-Owned" },
    { number: "Inclusive", label: "Growth Focused" },
    { number: "Trusted", label: "Partner in Progress" }
  ];

  const values = [
    {
      icon: Users,
      title: "Empowerment Through Ownership",
      description: "As a 100% black-owned startup, Allegian is part of a broader movement toward inclusion and economic empowerment."
    },
    {
      icon: Target,
      title: "Partnerships & Growth",
      description: "We build thoughtful partnerships, support inclusive growth, and create opportunities for emerging talent."
    },
    {
      icon: Award,
      title: "Integrity & Accountability",
      description: "We lead with humility, purpose, and accountability while striving to earn your trust."
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
              Allegian is a young company with deep roots. Founded by Vicel Moshapo—a dedicated security specialist with over 43 years of experience—Allegian was born from a desire to make meaningful contributions to the security industry. Mr. Moshapo’s lifelong commitment to technical excellence and mentorship continues to guide our journey as we grow, learn, and serve.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We approach every challenge with care, every partnership with respect, and every solution with integrity. Our goal is simple: to build reliable security systems that protect people and property, while creating opportunities for others to thrive.
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
                    alt="Vicel Moshapo, Founder of Allegian"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">Vicel Moshapo</h3>
                    <p className="text-sm text-white/90">Founder & CEO</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission Statement */}
            <Card className="bg-gradient-card shadow-card-allegian">
              <CardContent className="p-6 text-center">
                <blockquote className="text-lg font-medium text-foreground mb-4">
                  "We don’t claim to have all the answers—but we’re here to listen, learn, and work hard to earn your trust. We’re more than a provider—we’re a partner in progress."
                </blockquote>
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Partner in Progress</span>
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