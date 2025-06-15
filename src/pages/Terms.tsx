
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-display font-bold rm-dark-purple mb-8">
          Terms & Conditions
        </h1>

        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold rm-dark-purple mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using the Rang Mahal website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold rm-dark-purple mb-4">Product Information</h2>
            <p className="text-gray-700 mb-4">
              We strive to provide accurate product descriptions and images. However, we do not guarantee that product descriptions, colors, or other content is accurate, complete, reliable, current, or error-free.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold rm-dark-purple mb-4">Orders and Payment</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>All orders are subject to availability and confirmation</li>
              <li>We accept Cash on Delivery (COD) as the primary payment method</li>
              <li>Prices are subject to change without notice</li>
              <li>We reserve the right to refuse or cancel orders</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold rm-dark-purple mb-4">Delivery</h2>
            <p className="text-gray-700 mb-4">
              Delivery times are estimates and may vary. We are not responsible for delays caused by circumstances beyond our control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold rm-dark-purple mb-4">Returns and Exchanges</h2>
            <p className="text-gray-700 mb-4">
              Please contact us within 7 days of receiving your order if you need to return or exchange an item. Items must be in original condition.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold rm-dark-purple mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For any questions regarding these terms, please contact us:
            </p>
            <ul className="list-none text-gray-700 space-y-2">
              <li>Email: rangmahal232@gmail.com</li>
              <li>Phone: +92 329 8842889</li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
