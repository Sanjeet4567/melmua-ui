export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  subcategories: Subcategory[];
  featured?: boolean;
}

export interface Subcategory {
  id: string;
  name: string;
  description: string;
  image: string;
  categoryId: string;
}

export interface Artist {
  id: string;
  name: string;
  profileImage: string;
  bio: string;
  price: number;
  rating: number;
  reviewCount: number;
  categoryIds: string[];
  subcategoryIds: string[];
  location: string;
  experience: string;
  portfolio: string[];
  specialties: string[];
  availability: string[];
  verified: boolean;
}

export interface Booking {
  id: string;
  artistId: string;
  categoryId: string;
  subcategoryId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  totalAmount: number;
  createdAt: string;
}

export interface Review {
  id: string;
  artistId: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface BookingFormData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  date: string;
  time: string;
  notes?: string;
}