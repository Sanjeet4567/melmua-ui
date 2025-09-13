import { Artist } from '@/types';

export const artists: Artist[] = [
  // Bridal Makeup Artists
  {
    id: 'artist-1',
    name: 'Priya Sharma',
    profileImage: 'https://images.pexels.com/photos/13793545/pexels-photo-13793545.png',
    bio: 'Specializing in traditional and contemporary bridal looks with 8+ years of experience.',
    price: 15000,
    rating: 4.9,
    reviewCount: 127,
    categoryIds: ['bridal'],
    subcategoryIds: ['traditional-bridal', 'contemporary-bridal'],
    location: 'Mumbai',
    experience: '8+ years',
    portfolio: [
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    ],
    specialties: ['Traditional Bridal', 'HD Makeup', 'Airbrush'],
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    verified: true
  },
  {
    id: 'artist-2',
    name: 'Anita Desai',
    profileImage: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Expert in destination wedding makeup and contemporary bridal styles.',
    price: 18000,
    rating: 4.8,
    reviewCount: 89,
    categoryIds: ['bridal'],
    subcategoryIds: ['destination-wedding', 'contemporary-bridal'],
    location: 'Delhi',
    experience: '6+ years',
    portfolio: [
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    ],
    specialties: ['Destination Wedding', 'Contemporary Looks', 'Waterproof Makeup'],
    availability: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    verified: true
  },

  // Party & Glam Artists
  {
    id: 'artist-3',
    name: 'Kavya Patel',
    profileImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Glamour makeup specialist known for stunning party and red carpet looks.',
    price: 8000,
    rating: 4.7,
    reviewCount: 156,
    categoryIds: ['party-glam'],
    subcategoryIds: ['cocktail-party', 'red-carpet-glam', 'evening-party'],
    location: 'Bangalore',
    experience: '5+ years',
    portfolio: [
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    ],
    specialties: ['Glam Makeup', 'Contouring', 'Evening Looks'],
    availability: ['Friday', 'Saturday', 'Sunday'],
    verified: true
  },
  {
    id: 'artist-4',
    name: 'Mia Kapoor',
    profileImage: 'https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg',
    bio: 'Celebrity makeup artist specializing in red carpet and high-end party looks.',
    price: 12000,
    rating: 4.9,
    reviewCount: 203,
    categoryIds: ['party-glam'],
    subcategoryIds: ['red-carpet-glam', 'evening-party'],
    location: 'Mumbai',
    experience: '10+ years',
    portfolio: [
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    ],
    specialties: ['Celebrity Makeup', 'Red Carpet', 'High Fashion'],
    availability: ['Friday', 'Saturday', 'Sunday'],
    verified: true
  },

  // Casual/Everyday Artists
  {
    id: 'artist-5',
    name: 'Sneha Kapoor',
    profileImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Expert in glamorous party makeup and bold looks. Perfect for special occasions.',
    price: 3500,
    rating: 4.5,
    reviewCount: 89,
    categoryIds: ['party'],
    subcategoryIds: ['cocktail-party', 'night-party'],
    location: 'Pune',
    experience: '4+ years',
    portfolio: [
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    ],
    specialties: ['Smokey Eyes', 'Bold Lips', 'Contouring'],
    availability: ['Friday', 'Saturday', 'Sunday'],
    verified: true
  },

  // Fashion & Editorial Artists
  {
    id: 'artist-6',
    name: 'Abhi Reddy',
    profileImage: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Editorial and fashion makeup artist with expertise in creative and artistic looks.',
    price: 20000,
    rating: 4.8,
    reviewCount: 145,
    categoryIds: ['fashion-editorial'],
    subcategoryIds: ['runway', 'photoshoot-makeup', 'creative-high-fashion'],
    location: 'Mumbai',
    experience: '12+ years',
    portfolio: [
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    ],
    specialties: ['Editorial Makeup', 'Runway', 'Creative Artistry'],
    availability: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    verified: true
  },

  // Festive/Cultural Artists
  {
    id: 'artist-7',
    name: 'Deepika Agarwal',
    profileImage: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg',
    bio: 'Traditional and festive makeup specialist with cultural expertise.',
    price: 6000,
    rating: 4.7,
    reviewCount: 92,
    categoryIds: ['festive-cultural'],
    subcategoryIds: ['festival-looks', 'navratri-garba', 'regional-styles'],
    location: 'Ahmedabad',
    experience: '7+ years',
    portfolio: [
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    ],
    specialties: ['Festive Makeup', 'Cultural Styles', 'Traditional Looks'],
    availability: ['Friday', 'Saturday', 'Sunday'],
    verified: true
  },

  // Specialty Artists
  {
    id: 'artist-8',
    name: 'Ritik Malhotra',
    profileImage: 'https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg',
    bio: 'HD and airbrush makeup specialist for photography and videography.',
    price: 10000,
    rating: 4.9,
    reviewCount: 134,
    categoryIds: ['specialty'],
    subcategoryIds: ['hd-camera-ready', 'airbrush-makeup'],
    location: 'Delhi',
    experience: '9+ years',
    portfolio: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    ],
    specialties: ['HD Makeup', 'Airbrush Technique', 'Camera Ready'],
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    verified: true
  },

  // Additional artists for variety
  {
    id: 'artist-9',
    name: 'Nisha Gupta',
    profileImage: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Versatile makeup artist with expertise across multiple categories.',
    price: 9000,
    rating: 4.6,
    reviewCount: 87,
    categoryIds: ['bridal', 'party-glam'],
    subcategoryIds: ['contemporary-bridal', 'cocktail-party', 'evening-party'],
    location: 'Chennai',
    experience: '6+ years',
    portfolio: [
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1594736797933-d0cc501ba3fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    ],
    specialties: ['Bridal Makeup', 'Party Glam', 'Versatile Styling'],
    availability: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    verified: true
  },

  {
    id: 'artist-10',
    name: 'Pooja Mehta',
    profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Theatrical and creative makeup artist for special events and performances.',
    price: 7500,
    rating: 4.5,
    reviewCount: 64,
    categoryIds: ['specialty', 'fashion-editorial'],
    subcategoryIds: ['theatrical-stage', 'creative-high-fashion'],
    location: 'Kolkata',
    experience: '5+ years',
    portfolio: [
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    ],
    specialties: ['Theatrical Makeup', 'Creative Artistry', 'Performance Makeup'],
    availability: ['Friday', 'Saturday', 'Sunday'],
    verified: false
  }
];