
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ShoppingBag, Heart, Award } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Home = () => {
  const featuredCategories = [
    {
      name: 'Plain Choori',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Elegant everyday bangles',
      link: '/categories/plain-choori'
    },
    {
      name: 'Bridal Sets',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Luxurious bridal collections',
      link: '/categories/bridal-sets'
    },
    {
      name: 'Party Wears',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Stunning party accessories',
      link: '/categories/party-wears'
    }
  ];

  const testimonials = [
    {
      name: 'Ayesha Khan',
      text: 'Amazing quality bangles! The colors are so vibrant and they match perfectly with my outfits.',
      rating: 5
    },
    {
      name: 'Fatima Ali',
      text: 'Perfect for my wedding! The bridal set was exactly what I was looking for.',
      rating: 5
    },
    {
      name: 'Sara Ahmed',
      text: 'Fast delivery and beautiful packaging. Will definitely order again!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-display font-bold mb-6">
            Rang Mahal
          </h1>
          <p className="text-2xl md:text-3xl mb-4 rm-light-pink">
            It's all about colors
          </p>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Discover our premium collection of bangles for every occasion - 
            from casual everyday wear to stunning bridal sets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" className="bg-rm-pink hover:bg-rm-dark-purple text-white px-8 py-4 text-lg">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
              </Button>
            </Link>
            <Link to="/categories">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
                Browse Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-display font-bold rm-dark-purple mb-4">
              Featured Collections
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our carefully curated collections designed for every occasion and style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCategories.map((category, index) => (
              <Card key={category.name} className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in">
                <div className="relative overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-rm-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold rm-dark-purple mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link to={category.link}>
                    <Button className="bg-rm-purple hover:bg-rm-dark-purple text-white">
                      Explore Collection
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-rm-light-pink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold rm-dark-purple mb-4">
              Why Choose Rang Mahal?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-rm-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold rm-dark-purple mb-2">Premium Quality</h3>
              <p className="text-gray-600">Handcrafted with attention to detail and finest materials</p>
            </div>

            <div className="text-center">
              <div className="bg-rm-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold rm-dark-purple mb-2">Unique Designs</h3>
              <p className="text-gray-600">Exclusive collections you won't find anywhere else</p>
            </div>

            <div className="text-center">
              <div className="bg-rm-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold rm-dark-purple mb-2">Easy Shopping</h3>
              <p className="text-gray-600">Simple ordering with cash on delivery option</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold rm-dark-purple mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold rm-dark-purple">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rm-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Add Color to Your Style?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Browse our complete collection and find the perfect bangles that express your unique style
          </p>
          <Link to="/shop">
            <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg">
              Start Shopping
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
