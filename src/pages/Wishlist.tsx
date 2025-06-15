
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Mock wishlist data
const wishlistItems = [
  {
    id: '1',
    name: 'Royal Pink Bangles Set',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    inStock: true
  },
  {
    id: '2',
    name: 'Bridal Kundan Collection',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    inStock: false
  }
];

const Wishlist = () => {
  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Heart className="h-24 w-24 mx-auto text-gray-300 mb-6" />
            <h1 className="text-3xl font-display font-bold rm-dark-purple mb-4">
              Your Wishlist is Empty
            </h1>
            <p className="text-gray-600 mb-8">
              Save your favorite bangles to your wishlist!
            </p>
            <Link to="/shop">
              <Button className="bg-rm-pink hover:bg-rm-dark-purple text-white px-8 py-3">
                Start Shopping
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
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-display font-bold rm-dark-purple mb-8">
          My Wishlist
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Trash2 className="h-4 w-4 text-red-600" />
                </button>
              </div>
              <CardContent className="p-4">
                <Link to={`/product/${item.id}`}>
                  <h3 className="font-semibold rm-dark-purple mb-2 hover:rm-pink cursor-pointer">
                    {item.name}
                  </h3>
                </Link>
                <p className="text-2xl font-bold rm-pink mb-3">
                  Rs. {item.price.toLocaleString()}
                </p>
                
                {item.inStock ? (
                  <Button className="w-full bg-rm-purple hover:bg-rm-dark-purple text-white">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                ) : (
                  <Button disabled className="w-full">
                    Out of Stock
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
