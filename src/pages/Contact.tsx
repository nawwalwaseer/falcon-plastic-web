
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-5xl font-display font-bold mb-4">Contact Us</h1>
          <p className="text-xl rm-light-pink">Get in touch for all your bangle needs</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold rm-dark-purple mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to find your perfect bangles? Reach out to us through any of the channels below
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center group hover:shadow-xl transition-all duration-300 animate-scale-in">
              <CardContent className="p-8">
                <div className="bg-rm-gradient p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold rm-dark-purple mb-3">
                  Location
                </h3>
                <p className="text-gray-600">
                  Lahore, Pakistan<br />
                  (Delivery across Pakistan)
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300 animate-scale-in">
              <CardContent className="p-8">
                <div className="bg-rm-gradient p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold rm-dark-purple mb-3">
                  WhatsApp
                </h3>
                <a 
                  href="https://wa.me/923298842889" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rm-purple hover:rm-dark-purple transition-colors"
                >
                  +92 329 8842889
                </a>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300 animate-scale-in">
              <CardContent className="p-8">
                <div className="bg-rm-gradient p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold rm-dark-purple mb-3">
                  Email
                </h3>
                <a 
                  href="mailto:rangmahal232@gmail.com" 
                  className="rm-purple hover:rm-dark-purple transition-colors break-all"
                >
                  rangmahal232@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300 animate-scale-in">
              <CardContent className="p-8">
                <div className="bg-rm-gradient p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold rm-dark-purple mb-3">
                  Business Hours
                </h3>
                <p className="text-gray-600">
                  Monday - Saturday<br />
                  9:00 AM - 8:00 PM
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Person */}
          <div className="bg-rm-light-pink/10 rounded-lg p-8 mb-16">
            <div className="text-center">
              <h3 className="text-2xl font-display font-bold rm-dark-purple mb-4">
                Get In Touch
              </h3>
              <div className="max-w-md mx-auto">
                <p className="text-lg font-semibold rm-purple mb-2">
                  Rang Mahal Team
                </p>
                <p className="text-gray-700 mb-4">
                  Customer Service & Orders
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://wa.me/923298842889"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-rm-purple hover:bg-rm-dark-purple w-full sm:w-auto">
                      WhatsApp Chat
                    </Button>
                  </a>
                  <a 
                    href="mailto:rangmahal232@gmail.com"
                  >
                    <Button variant="outline" className="border-rm-purple text-rm-purple hover:bg-rm-purple hover:text-white w-full sm:w-auto">
                      Send Email
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="bg-rm-light-pink/10 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-display font-bold rm-dark-purple mb-4">
              Follow Us on Social Media
            </h3>
            <p className="text-gray-700 mb-6">
              Stay updated with our latest collections and offers
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.facebook.com/share/1CC5ha45EZ/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-rm-gradient text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
              >
                Facebook
              </a>
              <a 
                href="https://www.instagram.com/rangmahal.rm?igsh=MXBvNGp2N3MzNXY3YQ%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-rm-gradient text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
              >
                Instagram
              </a>
              <a 
                href="https://www.tiktok.com/@rangmahal.rm?_t=ZS-8xCwnl9snnk&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-rm-gradient text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rm-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Find Your Perfect Bangles?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Don't wait - browse our collection today and discover the beauty 
            that awaits you at Rang Mahal.
          </p>
          <a href="/shop">
            <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-md font-semibold transition-colors duration-200">
              Browse Collection
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
