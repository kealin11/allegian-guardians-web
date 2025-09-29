import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Shield } from 'lucide-react';
import logoIcon from '@/assets/logo-icon.png';

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logoIcon} alt="Allegian" className="h-8 w-8 mr-3" />
              <span className="text-xl font-bold text-primary">ALLEGIAN</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Security Solutions for Tomorrow. Protecting what matters most with 
              innovative, reliable, and professional security services.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Shield className="h-4 w-4 mr-2 text-primary" />
              Licensed & Insured Security Provider
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                083 326 7248
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                info@allegian.com
              </li>
              <li className="flex items-start text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-3 text-primary mt-0.5" />
                Vista Place, Suite 1, 1st Floor, Cnr Vorster & Glen Avenue<br />
                Glenanda, Johannersburg South, Gauteng
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Allegian Security Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;