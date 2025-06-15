
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useCart } from '@/hooks/useCart';
import { useCategories, useProducts } from '@/hooks/useProducts';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();
  const { data: categories = [] } = useCategories();
  const { data: products = [] } = useProducts();

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category_id === selectedCategory);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image_url,
      color: product.colors?.[0] || 'Default'
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
          {categories.map((category) => (
            <Button 
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="bg-rm-pink hover:bg-rm-dark-purple"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  {product.image_url ? (
                    <img 
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
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
                  {product.colors && product.colors.length > 0 && (
                    <div className="flex gap-2 mb-3">
                      {product.colors.map((color, index) => (
                        <div key={index} className="text-xs px-2 py-1 bg-gray-100 rounded">
                          {color}
                        </div>
                      ))}
                    </div>
                  )}
                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-rm-purple hover:bg-rm-dark-purple text-white"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No products found.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
