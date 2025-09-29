import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoFull from '@/assets/logo-full.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28 md:h-32">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoFull} 
              alt="Allegian Security Solutions" 
              className="h-24 md:h-28 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Contact Info */}
            <div className="flex items-center space-x-6 pl-6 border-l border-border">
              <a
                href="tel:0833267248"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4 mr-2" />
                083 326 7248
              </a>
              <a
                href="mailto:info@allegian.co.za"
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4 mr-2" />
                info@allegian.co.za
              </a>
            </div>

            <Button asChild className="ml-4">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-4 pb-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Contact Info in Mobile */}
              <div className="px-3 py-2 space-y-2 border-t border-border mt-2">
                <a
                  href="tel:0833267248"
                  className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  083 326 7248
                </a>
                <a
                  href="mailto:info@allegian.co.za"
                  className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  info@allegian.co.za
                </a>
              </div>

              <div className="px-3 pt-2">
                <Button asChild className="w-full">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Get Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
