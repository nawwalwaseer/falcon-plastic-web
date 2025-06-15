import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Package, Users, ShoppingCart, Plus, Upload, X } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useCategories, useCreateProduct, useProducts } from '@/hooks/useProducts';
import { useToast } from '@/hooks/use-toast';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  // Form state
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [productColors, setProductColors] = useState('');

  const { data: categories = [] } = useCategories();
  const { data: products = [] } = useProducts();
  const createProduct = useCreateProduct();
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handleSaveProduct = async () => {
    if (!productName || !productPrice || !selectedCategory) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const colorsArray = productColors
      .split(',')
      .map(color => color.trim())
      .filter(color => color.length > 0);

    try {
      await createProduct.mutateAsync({
        name: productName,
        description: productDescription,
        price: parseFloat(productPrice),
        category_id: selectedCategory,
        colors: colorsArray,
        image_url: imagePreview, // For now using base64, you can implement proper file upload later
        stock_quantity: 100, // Default stock
        is_active: true,
      });

      // Reset form
      setProductName('');
      setProductPrice('');
      setProductDescription('');
      setSelectedCategory('');
      setProductColors('');
      removeImage();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const stats = [
    { title: 'Total Products', value: products.length.toString(), icon: Package, color: 'bg-rm-pink' },
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
                  Recent Products
                </h2>
                <div className="space-y-3">
                  {products.slice(0, 3).map((product) => (
                    <div key={product.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-600">Rs. {product.price.toLocaleString()}</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        Active
                      </span>
                    </div>
                  ))}
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
                      <Label htmlFor="product-name">Product Name *</Label>
                      <Input 
                        id="product-name" 
                        placeholder="Enter product name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="product-price">Price *</Label>
                      <Input 
                        id="product-price" 
                        type="number" 
                        placeholder="Enter price"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="product-description">Description</Label>
                    <Textarea 
                      id="product-description" 
                      placeholder="Enter product description"
                      value={productDescription}
                      onChange={(e) => setProductDescription(e.target.value)}
                    />
                  </div>
                  
                  {/* Image Upload Section */}
                  <div>
                    <Label htmlFor="product-image">Product Image</Label>
                    <div className="mt-2">
                      {!imagePreview ? (
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-rm-pink transition-colors">
                          <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                          <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                          <Input
                            id="product-image"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            className="mt-2"
                            onClick={() => document.getElementById('product-image')?.click()}
                          >
                            Choose File
                          </Button>
                        </div>
                      ) : (
                        <div className="relative">
                          <img
                            src={imagePreview}
                            alt="Product preview"
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={removeImage}
                            className="absolute top-2 right-2"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="product-category">Category *</Label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="product-colors">Available Colors</Label>
                      <Input 
                        id="product-colors" 
                        placeholder="Enter colors (comma separated)"
                        value={productColors}
                        onChange={(e) => setProductColors(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-rm-purple hover:bg-rm-dark-purple text-white"
                    onClick={handleSaveProduct}
                    disabled={createProduct.isPending}
                  >
                    {createProduct.isPending ? 'Saving...' : 'Save Product'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product List */}
            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold rm-dark-purple mb-4">Current Products</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {products.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4">
                      {product.image_url && (
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="w-full h-32 object-cover rounded mb-2"
                        />
                      )}
                      <h4 className="font-medium">{product.name}</h4>
                      <p className="text-sm text-gray-600">Rs. {product.price.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">{product.categories?.name}</p>
                    </div>
                  ))}
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
