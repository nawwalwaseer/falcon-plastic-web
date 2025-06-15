
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Heart, Filter } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useCart } from '@/hooks/useCart';

// Mock product data
const products = [
  {
    id: '1',
    name: 'Royal Pink Bangles Set',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'plain-choori',
    colors: ['Pink', 'Gold', 'Silver']
  },
  {
    id: '2',
    name: 'Bridal Kundan Collection',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'bridal-sets',
    colors: ['Gold', 'Red', 'Green']
  },
  {
    id: '3',
    name: 'Party Glitter Bangles',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'party-wears',
    colors: ['Silver', 'Gold', 'Rose Gold']
  },
  {
    id: '4',
    name: 'Traditional Gold Bangles',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'plain-choori',
    colors: ['Gold', 'Antique Gold']
  }
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color: product.colors[0]
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold rm-dark-purple mb-4">
            Our Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete range of premium bangles for every occasion
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Button 
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
            className="bg-rm-pink hover:bg-rm-dark-purple"
          >
            All Products
          </Button>
          <Button 
            variant={selectedCategory === 'plain-choori' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('plain-choori')}
            className="bg-rm-pink hover:bg-rm-dark-purple"
          >
            Plain Choori
          </Button>
          <Button 
            variant={selectedCategory === 'bridal-sets' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('bridal-sets')}
            className="bg-rm-pink hover:bg-rm-dark-purple"
          >
            Bridal Sets
          </Button>
          <Button 
            variant={selectedCategory === 'party-wears' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('party-wears')}
            className="bg-rm-pink hover:bg-rm-dark-purple"
          >
            Party Wears
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
              </div>
              <CardContent className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold rm-dark-purple mb-2 hover:rm-pink cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-2xl font-bold rm-pink mb-3">
                  Rs. {product.price.toLocaleString()}
                </p>
                <div className="flex gap-2 mb-3">
                  {product.colors.map((color, index) => (
                    <div key={index} className="text-xs px-2 py-1 bg-gray-100 rounded">
                      {color}
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-rm-purple hover:bg-rm-dark-purple text-white"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
