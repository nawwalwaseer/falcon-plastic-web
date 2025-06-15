
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Package, Users, ShoppingCart, Plus } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { title: 'Total Products', value: '24', icon: Package, color: 'bg-rm-pink' },
    { title: 'Total Orders', value: '156', icon: ShoppingCart, color: 'bg-rm-purple' },
    { title: 'Customers', value: '89', icon: Users, color: 'bg-rm-blue' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-display font-bold rm-dark-purple mb-8">
          Admin Dashboard
        </h1>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8">
          <Button
            variant={activeTab === 'dashboard' ? 'default' : 'outline'}
            onClick={() => setActiveTab('dashboard')}
            className="bg-rm-pink hover:bg-rm-dark-purple"
          >
            Dashboard
          </Button>
          <Button
            variant={activeTab === 'products' ? 'default' : 'outline'}
            onClick={() => setActiveTab('products')}
            className="bg-rm-pink hover:bg-rm-dark-purple"
          >
            Products
          </Button>
          <Button
            variant={activeTab === 'orders' ? 'default' : 'outline'}
            onClick={() => setActiveTab('orders')}
            className="bg-rm-pink hover:bg-rm-dark-purple"
          >
            Orders
          </Button>
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${stat.color}`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold rm-dark-purple">{stat.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold rm-dark-purple mb-4">
                  Recent Orders
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-medium">Order #001</p>
                      <p className="text-sm text-gray-600">Ayesha Khan - Rs. 2,500</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Completed
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-medium">Order #002</p>
                      <p className="text-sm text-gray-600">Fatima Ali - Rs. 8,500</p>
                    </div>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                      Pending
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold rm-dark-purple">Manage Products</h2>
              <Button className="bg-rm-pink hover:bg-rm-dark-purple text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="product-name">Product Name</Label>
                      <Input id="product-name" placeholder="Enter product name" />
                    </div>
                    <div>
                      <Label htmlFor="product-price">Price</Label>
                      <Input id="product-price" type="number" placeholder="Enter price" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="product-description">Description</Label>
                    <Textarea id="product-description" placeholder="Enter product description" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="product-category">Category</Label>
                      <Input id="product-category" placeholder="Enter category" />
                    </div>
                    <div>
                      <Label htmlFor="product-colors">Available Colors</Label>
                      <Input id="product-colors" placeholder="Enter colors (comma separated)" />
                    </div>
                  </div>
                  
                  <Button className="bg-rm-purple hover:bg-rm-dark-purple text-white">
                    Save Product
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div>
            <h2 className="text-2xl font-semibold rm-dark-purple mb-6">Order Management</h2>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[1, 2, 3].map((order) => (
                    <div key={order} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Order #{order.toString().padStart(3, '0')}</p>
                        <p className="text-sm text-gray-600">Customer Name - Rs. 2,500</p>
                        <p className="text-sm text-gray-600">+92 300 1234567</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm" className="bg-rm-purple hover:bg-rm-dark-purple">
                          Update Status
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
