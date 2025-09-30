import ProductGrid from '../src/components/ProductGrid';
import CartButton from '../src/components/CartButton';
import CartModal from '../src/components/CartModal';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Shopping Cart Demo
              </h1>
            </div>
            <CartButton />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Our Products
          </h2>
          <p className="text-gray-600">
            Discover our collection of high-quality products
          </p>
        </div>
        
        <ProductGrid />
      </main>

      {/* Cart Modal */}
      <CartModal />
    </div>
  );
}