# Shopping Cart Demo

A minimal e-commerce site built with Next.js frontend and Express.js backend, featuring a shopping cart with Redux state management.

## Features

### Core Features
- ✅ Product listing with grid layout
- ✅ Add to cart functionality
- ✅ Shopping cart modal with item management
- ✅ Quantity adjustment in cart
- ✅ Checkout process
- ✅ Responsive design with Tailwind CSS

### Bonus features
- ✅ Followed the test driven structure
- ✅ Redux for state management
- ✅ localStorage persistence for cart data
- ✅ Backend test cases for products endpoint
- ✅ Modern UI with hover effects and animations

## Tech Stack

### Frontend
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Redux Toolkit** - State management
- **Tailwind CSS** - Styling
- **React Redux** - Redux integration

### Backend
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **CORS** - Cross-origin resource sharing
- **Swagger** - API documentation (`/api-docs`)
- **Jest** - Testing framework
- **Supertest** - HTTP testing

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd simple_shopping_cart/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

   The backend will run on `http://localhost:3001`

4. Run tests:
   ```  
   npm test
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```  
   cd simple_shopping_cart/frontend/shopping_cart
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

   The frontend will run on `http://localhost:3000`

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a specific product

### Checkout
- `POST /api/checkout` - Process checkout with cart items

### Health Check
- `GET /api/health` - Server health status

### API Documentation (Swagger)
- Swagger UI is available at `http://localhost:3001/api-docs`
- OpenAPI spec is generated with `swagger-jsdoc` from route annotations
- Endpoints documented: Products, Checkout

## Usage

1. **View Products**: Browse the product grid on the homepage
2. **Add to Cart**: Click "Add to Cart" on any product
3. **Manage Cart**: Click the cart button to view and manage items
4. **Adjust Quantities**: Use +/- buttons in the cart modal
5. **Checkout**: Click "Checkout" to process the order
6. **Persistence**: Cart data is automatically saved to localStorage

## Testing

The backend includes comprehensive test cases for the products API:

```bash
cd simple_shopping_cart/backend
npm test
```

Tests cover:
- Fetching all products
- Fetching individual products
- Error handling for invalid requests

## Features Implemented

### ✅ Core Requirements
- [x] Backend API with hardcoded products
- [x] Backend checkout endpoint
- [x] Frontend product grid
- [x] Add to cart functionality
- [x] Cart state management
- [x] Cart modal view
- [x] Checkout process

### ✅ Bonus Features
- [x] Quantity adjustment in cart
- [x] localStorage persistence
- [x] Backend test cases
- [x] Redux state management
- [x] Modern responsive UI
- [x] Loading states and error handling
- [x] TypeScript throughout

## Development Notes

- The cart state persists across page refreshes using localStorage
- All API calls include proper error handling
- The UI is fully responsive and works on mobile devices
- Redux DevTools can be used for debugging state changes
- The backend logs all checkout orders to the console
