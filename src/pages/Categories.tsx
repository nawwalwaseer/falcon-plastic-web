
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useCart } from '@/hooks/useCart';
import { useCategories, useProducts } from '@/hooks/useProducts';

const Categories = () => {
  const { category } = useParams();
  const { addToCart } = useCart();
  const { data: categories = [] } = useCategories();
  const { data: products = [] } = useProducts();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image_url
    });
  };

  if (category) {
    // Find the specific category by slug
    const categoryData = categories.find(cat => cat.slug === category);
    const categoryProducts = products.filter(product => 
      product.categories?.slug === category
    );
    
    if (!categoryData) {
      return (
        <div className="min-h-screen bg-background">
          <Navigation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-4xl font-display font-bold rm-dark-purple mb-4">
                Category Not Found
              </h1>
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
          {/* Category Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold rm-dark-purple mb-4">
              {categoryData.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {categoryData.description}
            </p>
            
            {categoryData.image_url && (
              <img 
                src={categoryData.image_url}
                alt={categoryData.name}
                className="w-full max-w-4xl mx-auto h-64 object-cover rounded-lg mb-8"
              />
            )}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.length > 0 ? (
              categoryProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300">
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
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
              </div>
            )}
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
          {categories.map((category) => (
            <Card key={category.id} className="group hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                {category.image_url ? (
                  <img 
                    src={category.image_url}
                    alt={category.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold rm-dark-purple mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link to={`/categories/${category.slug}`}>
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
