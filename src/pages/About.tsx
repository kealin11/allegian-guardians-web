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
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Purpose</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
             Built on consistency, duty, faithfulness, and integrity, Allegian is committed to delivering
              future-ready security solutions that protect people, property, and reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
               To provide innovative and dependable security solutions that safeguard what matters
                most—guided by expertise, integrity, and an unwavering commitment to excellence.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be a trusted leader in redefining security through innovation, integrity, and
                empowerment—delivering tomorrow’s solutions, today.
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
                <h3 className="text-2xl font-semibold text-primary mb-4">Vicel Moshapo</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Vicel Moshapo is the visionary founder behind Allegian’s mission to revolutionize security
                  technology. With decades of hands-on experience and a passion for innovation, Mr. Moshapo
                  leads with purpose—driving product development, mentoring emerging talent, and setting the
                  tone for a company built on integrity and ingenuity.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Mr. Moshapo’s expertise in risk assessment and quality assurance ensures that every Allegian
                  product meets global standards for reliability and performance. As Allegian scales, his
                  leadership continues to inspire a new generation of technologists and entrepreneurs
                  committed to building safer, smarter systems.
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