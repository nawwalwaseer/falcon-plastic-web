
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Users, Heart } from 'lucide-react';
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
          backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.8), rgba(139, 69, 19, 0.8)), url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Rang Mahal</h1>
          <p className="text-xl">Where tradition meets beauty - It's all about colors</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold rm-dark-purple mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Rang Mahal began with a passion for preserving the timeless art of traditional 
                bangles while embracing contemporary designs. Our journey started with a simple 
                belief - that every woman deserves to express her unique style through beautiful, 
                high-quality bangles.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We specialize in creating exquisite bangles that celebrate the rich heritage of 
                traditional craftsmanship. From elegant everyday pieces to stunning bridal sets, 
                our collection caters to every occasion and personal style. Each bangle in our 
                collection is carefully curated to ensure the highest quality and most beautiful 
                designs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a commitment to excellence and customer satisfaction, we serve customers 
                across Pakistan with authentic, beautiful bangles that make every moment special. 
                Our expertise spans from classic traditional designs to modern contemporary 
                styles, ensuring there's something perfect for everyone.
              </p>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Beautiful bangles collection"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-rm-light-pink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-rm-gold mr-3" />
                  <h3 className="text-2xl font-bold rm-dark-purple">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To provide every woman with access to beautiful, high-quality bangles that 
                  celebrate her individual style and enhance her natural beauty. We are committed 
                  to offering authentic designs, exceptional quality, and outstanding customer 
                  service that makes every shopping experience memorable.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-rm-gold mr-3" />
                  <h3 className="text-2xl font-bold rm-dark-purple">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To become Pakistan's most trusted destination for premium bangles, recognized 
                  for our commitment to quality, authenticity, and customer satisfaction. We 
                  envision a future where Rang Mahal is synonymous with beautiful bangles that 
                  celebrate the rich cultural heritage while embracing modern elegance.
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
            <h2 className="text-4xl font-bold rm-dark-purple mb-4">
              Why Choose Rang Mahal?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our commitment to quality and beauty sets us apart in the world of bangles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-rm-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold rm-dark-purple mb-3">
                  Premium Quality
                </h3>
                <p className="text-gray-600">
                  Every bangle is carefully selected for quality, durability, and beauty, 
                  ensuring you receive only the finest pieces.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-rm-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold rm-dark-purple mb-3">
                  Expert Curation
                </h3>
                <p className="text-gray-600">
                  Our team of experts carefully curates each collection to bring you the 
                  latest trends and timeless classics.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-rm-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold rm-dark-purple mb-3">
                  Diverse Collection
                </h3>
                <p className="text-gray-600">
                  From traditional plain choori to elegant golden designs and stunning 
                  bridal sets, we have something for every occasion.
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
