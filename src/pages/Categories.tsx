
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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

const Categories = () => {
  const { category } = useParams();

  if (category && categories[category as keyof typeof categories]) {
    const categoryData = categories[category as keyof typeof categories];
    
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold rm-dark-purple mb-4">
              {categoryData.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {categoryData.description}
            </p>
          </div>

          <div className="text-center">
            <img 
              src={categoryData.image}
              alt={categoryData.title}
              className="w-full max-w-2xl mx-auto h-96 object-cover rounded-lg mb-8"
            />
            
            <Link to="/shop">
              <Button className="bg-rm-pink hover:bg-rm-dark-purple text-white px-8 py-3">
                View All Products
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
