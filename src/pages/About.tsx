import { Shield, Target, Users, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import founderImage from '@/assets/founder-vicel.jpg';

const About = () => {
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
                  <div className="text-3xl font-bold text-primary mb-2">43+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Black Owned</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Inclusive</div>
                  <div className="text-sm text-muted-foreground">Growth Focus</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Integrity</div>
                  <div className="text-sm text-muted-foreground">& Trust</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Allegian?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Allegian is a new name in the security industry, but our commitment runs deep. 
              Founded with a clear purpose—to deliver reliable, high-performance security solutions—
              we’re building a company that puts people first, listens closely, and works hard to earn trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg shadow-card-allegian">
              <h3 className="text-xl font-semibold text-primary mb-3">Delivering High-Performance Security Products</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our products are built to perform in demanding environments. From electronic doors to surveillance systems, we focus on durability, reliability, and ease of use—so you can feel confident that your security is never compromised.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-card-allegian">
              <h3 className="text-xl font-semibold text-primary mb-3">Conducting Thoughtful Risk Assessments</h3>
              <p className="text-muted-foreground leading-relaxed">
                We take a proactive approach to identifying vulnerabilities and designing tailored solutions. Our team works closely with clients to understand their context and develop practical strategies that address risks before they escalate.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-card-allegian">
              <h3 className="text-xl font-semibold text-primary mb-3">Building Long-Term Relationships</h3>
              <p className="text-muted-foreground leading-relaxed">
                At Allegian, we believe strong partnerships are the foundation of great security. We’re here to listen, adapt, and grow with you—offering ongoing support and solutions that evolve alongside your business.
              </p>
            </div>
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
