
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Award, Leaf } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Home = () => {
  const values = [
    {
      icon: <CheckCircle className="h-8 w-8 text-falcon-gold" />,
      title: "Innovation",
      description: "Cutting-edge injection molding technology for superior plastic products"
    },
    {
      icon: <Users className="h-8 w-8 text-falcon-gold" />,
      title: "Trust",
      description: "Reliable partnerships built on quality delivery and customer satisfaction"
    },
    {
      icon: <Award className="h-8 w-8 text-falcon-gold" />,
      title: "Quality",
      description: "Premium materials and precision manufacturing for durable solutions"
    },
    {
      icon: <Leaf className="h-8 w-8 text-falcon-gold" />,
      title: "Sustainability",
      description: "Eco-friendly practices and sustainable manufacturing processes"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 64, 154, 0.7), rgba(33, 64, 154, 0.7)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Leading Plastic Manufacturing in Pakistan
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Precision injection molding solutions for PVC pipes, electric conduits, and industrial fittings
          </p>
          <a 
            href="https://wa.me/923218855277"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-falcon-gold text-falcon-dark-blue hover:bg-yellow-400 text-lg px-8 py-3">
              Get in Touch
            </Button>
          </a>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-falcon-dark-blue mb-6">
                Falcon Plastic Industries
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Since 2019, we have been at the forefront of plastic manufacturing innovation in Pakistan. 
                Our state-of-the-art injection molding facilities produce high-quality plastic products 
                that meet international standards while serving local industry needs.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From PVC pipes to electrical conduits and precision fittings, we deliver solutions 
                that combine durability, reliability, and cost-effectiveness for our valued partners 
                across Pakistan.
              </p>
              <a href="/about">
                <Button variant="outline" size="lg" className="border-falcon-blue text-falcon-blue hover:bg-falcon-blue hover:text-white">
                  Learn More About Us
                </Button>
              </a>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Modern manufacturing facility"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-falcon-light-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-falcon-dark-blue mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Building the future of plastic manufacturing through innovation, trust, quality, and sustainability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-falcon-dark-blue mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Callout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Plastic manufacturing products"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-falcon-dark-blue mb-6">
                What We Manufacture
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our product range includes high-quality PVC pipes, electrical conduits, and precision fittings. 
                Each product is manufactured using advanced injection molding technology to ensure superior 
                durability and performance.
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-falcon-gold mr-3" />
                  High-pressure resistant PVC pipes
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-falcon-gold mr-3" />
                  Premium electrical conduits
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-falcon-gold mr-3" />
                  Industrial and construction fittings
                </li>
              </ul>
              <a href="/products">
                <Button size="lg" className="bg-falcon-blue hover:bg-falcon-dark-blue">
                  View Our Products
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-falcon-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Partner with us for custom plastic solutions
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join hundreds of satisfied clients who trust Falcon Plastic Industries 
            for their manufacturing needs. Let's build something great together.
          </p>
          <a 
            href="https://wa.me/923218855277"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="secondary" className="bg-white text-falcon-blue hover:bg-gray-100">
              Start Your Project Today
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
