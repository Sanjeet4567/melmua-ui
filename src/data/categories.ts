import { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'bridal',
    name: 'Bridal Makeup',
    description: 'Perfect looks for your special day',
    image: 'https://images.pexels.com/photos/2064505/pexels-photo-2064505.jpeg',
    featured: true,
    subcategories: [
      {
        id: 'traditional-bridal',
        name: 'Traditional Bridal',
        description: 'Classic traditional bridal looks',
        image: 'https://images.unsplash.com/photo-1594736797933-d0cc501ba3fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        categoryId: 'bridal'
      },
      {
        id: 'contemporary-bridal',
        name: 'Contemporary Bridal',
        description: 'Modern and trendy bridal styles',
        image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        categoryId: 'bridal'
      },
      {
        id: 'destination-wedding',
        name: 'Destination Wedding Looks',
        description: 'Perfect for destination weddings',
        image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        categoryId: 'bridal'
      }
    ]
  },
  {
    id: 'party',
    name: 'Party and Glam Makeup',
    description: 'Glamorous and bold makeup for parties and special events',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    featured: true,
    subcategories: [
      {
        id: 'cocktail-party',
        name: 'Cocktail Party',
        description: 'Elegant makeup for cocktail events',
        image: 'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        categoryId: 'party'
      },
      {
        id: 'night-party',
        name: 'Night Party',
        description: 'Bold and dramatic looks for nighttime events',
        image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        categoryId: 'party'
      },
      {
        id: 'festival-party',
        name: 'Festival Party',
        description: 'Vibrant and fun makeup for festivals',
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        categoryId: 'party'
      }
    ]
  },
  {
    id: 'casual-everyday',
    name: 'Casual / Everyday Makeup',
    description: 'Natural and effortless daily looks',
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    featured: false,
    subcategories: [
      {
        id: 'office-look',
        name: 'Office Look',
        description: 'Professional makeup for workplace',
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        categoryId: 'casual-everyday'
      },
      {
        id: 'minimal-natural',
        name: 'Minimal/Natural',
        description: 'Natural no-makeup makeup look',
        image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        categoryId: 'casual-everyday'
      },
      {
        id: 'day-out-brunch',
        name: 'Day Out/Brunch',
        description: 'Fresh looks for daytime outings',
        image: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        categoryId: 'casual-everyday'
      }
    ]
  },
  {
    id: 'fashion-editorial',
    name: 'Fashion & Editorial Makeup',
    description: 'Artistic and creative makeup styles',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    featured: true,
    subcategories: [
      {
        id: 'runway',
        name: 'Runway',
        description: 'Bold looks for fashion shows',
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        categoryId: 'fashion-editorial'
      },
      {
        id: 'photoshoot-makeup',
        name: 'Photoshoot Makeup',
        description: 'Camera-ready professional looks',
        image: 'https://images.unsplash.com/photo-1594736797933-d0cc501ba3fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        categoryId: 'fashion-editorial'
      },
      {
        id: 'creative-high-fashion',
        name: 'Creative/High Fashion',
        description: 'Avant-garde artistic makeup',
        image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        categoryId: 'fashion-editorial'
      }
    ]
  },
  {
    id: 'festive-cultural',
    name: 'Festive / Cultural Makeup',
    description: 'Traditional and festive celebration looks',
    image: 'https://images.pexels.com/photos/7685983/pexels-photo-7685983.jpeg',
    featured: false,
    subcategories: [
      {
        id: 'festival-looks',
        name: 'Diwali/Eid/Christmas Looks',
        description: 'Festive makeup for celebrations',
        image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        categoryId: 'festive-cultural'
      },
      {
        id: 'navratri-garba',
        name: 'Navratri/Garba',
        description: 'Traditional dance makeup',
        image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        categoryId: 'festive-cultural'
      },
      {
        id: 'regional-styles',
        name: 'Regional Styles',
        description: 'Cultural and regional makeup styles',
        image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        categoryId: 'festive-cultural'
      }
    ]
  },
  {
    id: 'specialty',
    name: 'Specialty Makeup',
    description: 'Professional and specialized makeup services',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    featured: false,
    subcategories: [
      {
        id: 'hd-camera-ready',
        name: 'HD/Camera Ready',
        description: 'High-definition makeup for cameras',
        image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        categoryId: 'specialty'
      },
      {
        id: 'airbrush-makeup',
        name: 'Airbrush Makeup',
        description: 'Flawless airbrush application',
        image: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        categoryId: 'specialty'
      },
      {
        id: 'theatrical-stage',
        name: 'Theatrical/Stage',
        description: 'Bold makeup for performances',
        image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        categoryId: 'specialty'
      }
    ]
  }
];