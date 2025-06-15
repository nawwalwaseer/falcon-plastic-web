import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useCart } from '@/hooks/useCart';

const categories = {
  'plain-choori': {
    title: 'Plain Choori',
    description: 'Elegant everyday bangles perfect for casual and formal wear',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  'bridal-sets': {
    title: 'Bridal Sets',
    description: 'Luxurious bridal collections for your special day',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  'party-wears': {
    title: 'Party Wears',
    description: 'Stunning party accessories that make you shine',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
};

// Sample products for each category
const categoryProducts = {
  'plain-choori': [
    {
      id: 'pc1',
      name: 'Golden Plain Bangles Set',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Beautiful golden plain bangles for everyday wear'
    },
    {
      id: 'pc2',
      name: 'Silver Plain Choori',
      price: 1800,
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Elegant silver bangles with smooth finish'
    },
    {
      id: 'pc3',
      name: 'Rose Gold Collection',
      price: 3200,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium rose gold bangles set'
    }
  ],
  'bridal-sets': [
    {
      id: 'bs1',
      name: 'Royal Bridal Set',
      price: 8500,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Luxurious bridal bangles with intricate designs'
    },
    {
      id: 'bs2',
      name: 'Diamond Bridal Collection',
      price: 12000,
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Stunning diamond-studded bridal set'
    },
    {
      id: 'bs3',
      name: 'Traditional Kundan Set',
      price: 9500,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Traditional kundan work bridal bangles'
    }
  ],
  'party-wears': [
    {
      id: 'pw1',
      name: 'Sparkle Party Bangles',
      price: 4200,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Glittery bangles perfect for parties'
    },
    {
      id: 'pw2',
      name: 'Crystal Fusion Set',
      price: 3800,
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Modern crystal-embedded party bangles'
    },
    {
      id: 'pw3',
      name: 'Colorful Party Collection',
      price: 2900,
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Vibrant multi-colored party bangles'
    }
  ]
};

const Categories = () => {
  const { category } = useParams();
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  if (category && categories[category as keyof typeof categories]) {
    const categoryData = categories[category as keyof typeof categories];
    const products = categoryProducts[category as keyof typeof categoryProducts];
    
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Category Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold rm-dark-purple mb-4">
              {categoryData.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {categoryData.description}
            </p>
            
            <img 
              src={categoryData.image}
              alt={categoryData.title}
              className="w-full max-w-4xl mx-auto h-64 object-cover rounded-lg mb-8"
            />
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/80 p-2 rounded-full hover:bg-white transition-colors">
                      <Heart className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold rm-dark-purple mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold rm-pink">
                      Rs. {product.price.toLocaleString()}
                    </span>
                    <div className="flex gap-2">
                      <Link to={`/product/${product.id}`}>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </Link>
                      <Button 
                        size="sm" 
                        className="bg-rm-purple hover:bg-rm-dark-purple text-white"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Back to Categories Link */}
          <div className="text-center mt-12">
            <Link to="/categories">
              <Button variant="outline" className="rm-purple">
                ← Back to All Categories
              </Button>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold rm-dark-purple mb-4">
            Our Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our beautiful collection organized by occasion and style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(categories).map(([key, category]) => (
            <Card key={key} className="group hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold rm-dark-purple mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link to={`/categories/${key}`}>
                  <Button className="bg-rm-purple hover:bg-rm-dark-purple text-white">
                    Explore Collection
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
