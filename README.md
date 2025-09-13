# Melmua - Premium Makeup Artist Booking Platform

A modern, responsive web application built with Next.js and TypeScript that connects users with professional makeup artists for various occasions. The platform features an intuitive booking system, beautiful UI design with animations, and comprehensive artist profiles.

![Melmua Hero](https://images.unsplash.com/photo-1487412912498-0447578fcca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## 🌟 Features

### Core Functionality
- **Modern Landing Page** with animated hero section and gradient backgrounds
- **Category-based Service Browsing** with 6 main makeup categories and subcategories
- **Advanced Artist Listings** with search, filtering, and detailed profiles
- **Comprehensive Booking System** with form validation and date/time selection
- **Booking Confirmation** with detailed receipt and next steps
- **My Bookings Dashboard** to manage all appointments

### Makeup Categories
1. **Bridal Makeup** - Traditional, Contemporary, Destination Wedding
2. **Party & Glam Makeup** - Cocktail, Red Carpet, Evening Looks
3. **Casual/Everyday Makeup** - Office, Minimal/Natural, Day Out
4. **Fashion & Editorial** - Runway, Photoshoot, Creative/High Fashion
5. **Festive/Cultural** - Festival Looks, Navratri/Garba, Regional Styles
6. **Specialty Makeup** - HD/Camera Ready, Airbrush, Theatrical/Stage

### Technical Features
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Framer Motion for engaging user interactions
- **TypeScript** - Type-safe development with comprehensive interfaces
- **Context Management** - React Context for booking state management
- **Modern UI Components** - Custom components with Heroicons
- **Search & Filtering** - Real-time search and multi-criteria filtering

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd melmua
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Landing page
│   ├── category/[id]/     # Category-specific artist listings
│   ├── book/[artistId]/   # Booking form page
│   ├── confirmation/      # Booking confirmation
│   └── bookings/          # My bookings dashboard
├── components/            # Reusable React components
│   ├── CategoriesSection.tsx
│   └── Footer.tsx
├── context/               # React Context providers
│   └── BookingContext.tsx
├── data/                  # Mock data
│   ├── categories.ts
│   └── artists.ts
├── types/                 # TypeScript type definitions
│   └── index.ts
└── hooks/                 # Custom React hooks
```

## 🎨 Design Choices

### Color Palette
- **Primary**: Purple gradient (`#d946ef` to `#c026d3`)
- **Secondary**: Rose gradient (`#f43f5e` to `#e11d48`)
- **Backgrounds**: Soft pink/purple gradients
- **Text**: Gray scale for readability

### Typography
- **Headings**: Playfair Display (serif) for elegance
- **Body**: Inter (sans-serif) for readability
- **Font Weight**: Strategic use of weights for hierarchy

### Animation Strategy
- **Page Transitions**: Smooth fade-in and slide-up animations
- **Hover Effects**: Scale and color transitions
- **Loading States**: Shimmer effects and spinners
- **Micro-interactions**: Button presses and form interactions

### Mobile-First Approach
- **Breakpoints**: Tailwind's responsive system
- **Touch Targets**: Minimum 44px for mobile usability
- **Navigation**: Collapsible mobile menu
- **Cards**: Stack vertically on mobile, grid on desktop

## 🔧 Technical Implementation

### State Management
- **React Context** for global booking state
- **Local State** for component-specific data
- **Form Validation** with real-time error checking

### Data Structure
```typescript
interface Artist {
  id: string;
  name: string;
  profileImage: string;
  price: number;
  rating: number;
  categoryIds: string[];
  // ... more fields
}

interface Booking {
  id: string;
  artistId: string;
  customerName: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  // ... more fields
}
```

### Routing Strategy
- **Dynamic Routes** for categories and artists
- **Query Parameters** for maintaining context
- **Client-side Navigation** with Next.js Link

## 🌐 User Flow

1. **Landing Page** → Browse hero section and categories
2. **Category Selection** → View specialized makeup services
3. **Artist Discovery** → Search, filter, and compare artists
4. **Artist Profile** → View details, portfolio, and reviews
5. **Booking Form** → Fill details and select date/time
6. **Confirmation** → View booking details and next steps
7. **My Bookings** → Manage all appointments

## 📱 Responsive Features

### Mobile (< 768px)
- Single column layouts
- Touch-friendly buttons
- Collapsible navigation
- Optimized image sizes

### Tablet (768px - 1024px)
- Two-column grids
- Medium-sized images
- Balanced typography

### Desktop (> 1024px)
- Multi-column layouts
- Hover effects
- Larger images and spacing
- Full navigation menu

## 🎯 Performance Optimizations

- **Image Optimization** with Next.js Image component
- **Code Splitting** with dynamic imports
- **CSS Optimization** with Tailwind purging
- **Font Loading** with Google Fonts optimization

## 🧪 Mock Data

The application uses comprehensive mock data including:
- **10 Professional Artists** with realistic profiles
- **6 Main Categories** with 18 subcategories total
- **Detailed Artist Information** including portfolios and reviews
- **Booking System** with persistent state management

## 🚀 Future Enhancements

### Planned Features
- **Real-time Chat** with artists
- **Video Consultations** for remote bookings
- **Payment Integration** with Stripe/Razorpay
- **Review System** with photo uploads
- **Artist Dashboard** for managing bookings
- **Push Notifications** for booking updates

### Technical Improvements
- **Database Integration** (MongoDB/PostgreSQL)
- **Authentication** with NextAuth.js
- **API Routes** for backend functionality
- **Image Upload** with cloud storage
- **SEO Optimization** with metadata
- **PWA Features** for mobile app experience

## 📄 License

This project is created as a frontend developer intern assignment and is for demonstration purposes.

## 🤝 Contributing

This is an assignment project, but feedback and suggestions are welcome!

## 📞 Contact

For questions about this project, please reach out through the contact information provided in the application.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS