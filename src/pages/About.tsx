import { Shield, Target, Users, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import founderImage from '@/assets/founder-vicel.jpg';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize the safety and security of our clients above all else, implementing comprehensive solutions that protect what matters most."
    },
    {
      icon: Target,
      title: "Precision & Excellence",
      description: "Our commitment to excellence drives us to deliver precise, reliable security solutions that exceed industry standards."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We build lasting relationships with our clients, working as trusted partners to understand and meet their unique security needs."
    },
    {
      icon: Award,
      title: "Professional Standards",
      description: "All our security professionals are highly trained, licensed, and continuously educated to maintain the highest standards of service."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Allegian
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Building trust through innovative security solutions, 
            protecting communities and businesses for a safer tomorrow.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a vision to revolutionize the security industry, Allegian combines 
              traditional security expertise with cutting-edge technology. We understand that 
              security is not just about protection—it's about peace of mind, trust, and enabling 
              businesses and communities to thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                To provide comprehensive, innovative security solutions that protect our clients' 
                assets, people, and peace of mind while fostering safe environments where businesses 
                and communities can flourish.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading security solutions provider, recognized for our integrity, 
                innovation, and unwavering commitment to client safety and satisfaction.
              </p>
            </div>

            <div className="bg-gradient-card rounded-lg p-8 shadow-card-allegian">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Clients Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Monitoring</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-foreground mb-6">Meet Our Founder</h2>
                <h3 className="text-2xl font-semibold text-primary mb-4">Vicel Johnson</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With over 15 years of experience in the security industry, Vicel founded 
                  Allegian with a simple yet powerful vision: to create a security company 
                  that truly puts clients first. His background in both corporate security 
                  and technology has shaped Allegian's innovative approach to modern security challenges.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Under his leadership, Allegian has grown to become a trusted partner for 
                  businesses across the region, known for our reliability, professionalism, 
                  and commitment to excellence in every aspect of our service.
                </p>
                <Button asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img
                    src={founderImage}
                    alt="Vicel Johnson, Founder of Allegian"
                    className="rounded-lg shadow-allegian w-80 h-96 object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;