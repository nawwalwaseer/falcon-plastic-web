
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Users, Factory } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 64, 154, 0.8), rgba(33, 64, 154, 0.8)), url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Falcon Plastic Industries</h1>
          <p className="text-xl">Excellence in plastic manufacturing since 2019</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-falcon-dark-blue mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Falcon Plastic Industries was established in 2019 with a vision to become Pakistan's 
                leading manufacturer of high-quality plastic products. Our journey began with a commitment 
                to excellence and innovation in the plastic manufacturing sector.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We specialize in high-quality plastic manufacturing using state-of-the-art injection 
                molding machinery. Our core focus is on producing durable and precise plastic goods 
                tailored to client needs, ensuring every product meets the highest standards of quality 
                and reliability.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a team of dedicated professionals and a commitment to sustainability, we serve 
                industries across Pakistan with reliable and cost-effective plastic solutions. Our 
                expertise spans from PVC pipes and electrical conduits to precision fittings for 
                diverse industrial applications.
              </p>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Falcon Plastic Industries facility"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-falcon-light-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-falcon-gold mr-3" />
                  <h3 className="text-2xl font-bold text-falcon-dark-blue">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To deliver exceptional plastic manufacturing solutions that exceed customer 
                  expectations through innovation, quality, and sustainable practices. We are 
                  committed to building long-term partnerships with our clients by providing 
                  reliable, cost-effective products that contribute to their success.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-falcon-gold mr-3" />
                  <h3 className="text-2xl font-bold text-falcon-dark-blue">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To become Pakistan's most trusted name in plastic manufacturing, recognized 
                  for our commitment to quality, innovation, and environmental responsibility. 
                  We envision a future where our products contribute to building a stronger, 
                  more sustainable industrial infrastructure across the region.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-falcon-dark-blue mb-4">
              Why Choose Falcon Plastic Industries?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our commitment to excellence and customer satisfaction sets us apart in the industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Factory className="h-12 w-12 text-falcon-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-falcon-dark-blue mb-3">
                  Advanced Technology
                </h3>
                <p className="text-gray-600">
                  State-of-the-art injection molding machinery ensuring precision and consistency 
                  in every product we manufacture.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-falcon-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-falcon-dark-blue mb-3">
                  Expert Team
                </h3>
                <p className="text-gray-600">
                  Dedicated professionals with years of experience in plastic manufacturing 
                  and quality control processes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-falcon-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-falcon-dark-blue mb-3">
                  Custom Solutions
                </h3>
                <p className="text-gray-600">
                  Tailored manufacturing solutions designed to meet specific client requirements 
                  and industry standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
