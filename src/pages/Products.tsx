
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, Zap, Settings } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Products = () => {
  const products = [
    {
      icon: <Wrench className="h-12 w-12 text-falcon-gold" />,
      title: "PVC Pipes",
      description: "Durable, high-pressure-resistant PVC pipes available in multiple sizes and specifications. Perfect for water supply, drainage, and industrial applications.",
      features: [
        "High-pressure resistance",
        "Multiple size options",
        "Corrosion resistant",
        "Long-lasting durability",
        "Cost-effective solution"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: <Zap className="h-12 w-12 text-falcon-gold" />,
      title: "Electric Conduits",
      description: "Premium conduits for safe and structured electrical installations. Designed to protect electrical wiring in residential, commercial, and industrial settings.",
      features: [
        "Electrical safety compliance",
        "Fire-resistant materials",
        "Easy installation",
        "Weather-resistant",
        "Various diameter options"
      ],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: <Settings className="h-12 w-12 text-falcon-gold" />,
      title: "Fittings",
      description: "A comprehensive range of fittings to support diverse industrial and construction needs. Precision-manufactured for reliable connections and optimal performance.",
      features: [
        "Precision engineering",
        "Wide variety of sizes",
        "Industrial grade quality",
        "Easy installation",
        "Compatible connections"
      ],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 64, 154, 0.8), rgba(33, 64, 154, 0.8)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">What We Manufacture</h1>
          <p className="text-xl">High-quality plastic products for industrial and construction applications</p>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-falcon-dark-blue mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Professionally engineered plastic products manufactured using state-of-the-art 
              injection molding technology to meet the highest industry standards.
            </p>
          </div>

          <div className="space-y-20">
            {products.map((product, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slide-up`}>
                  <div className="flex items-center mb-6">
                    {product.icon}
                    <h3 className="text-3xl font-bold text-falcon-dark-blue ml-4">
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-falcon-gold rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://wa.me/923218855277"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-falcon-blue hover:bg-falcon-dark-blue">
                      Request Quote
                    </Button>
                  </a>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} animate-scale-in`}>
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="rounded-lg shadow-2xl w-full h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-falcon-light-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-falcon-dark-blue mb-4">
              Quality Assurance
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Every product undergoes rigorous quality control to ensure it meets our high standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-falcon-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-falcon-dark-blue mb-3">
                  Material Testing
                </h3>
                <p className="text-gray-600">
                  All raw materials are tested for quality and composition before production begins.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-falcon-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-falcon-dark-blue mb-3">
                  Production Monitoring
                </h3>
                <p className="text-gray-600">
                  Continuous monitoring during the manufacturing process ensures consistency.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-falcon-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-falcon-dark-blue mb-3">
                  Final Inspection
                </h3>
                <p className="text-gray-600">
                  Every finished product is inspected before packaging and delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-falcon-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Contact us today to discuss your requirements and get a customized quote 
            for your plastic manufacturing needs.
          </p>
          <a 
            href="https://wa.me/923218855277"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="secondary" className="bg-white text-falcon-blue hover:bg-gray-100">
              Get Quote on WhatsApp
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
