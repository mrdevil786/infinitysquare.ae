/**
 * Portfolio projects. Single source of truth for index featured projects and portfolio page.
 */

export interface PortfolioProject {
  title: string;
  category: string;
  location: string;
  image: string;
  size?: 'large';
}

export const categories = ['All', 'Residential', 'Commercial', 'Retail', 'Hospitality'];

export const projects: PortfolioProject[] = [
  {
    title: 'Marina Penthouse',
    category: 'Residential',
    location: 'Dubai Marina',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    size: 'large',
  },
  {
    title: 'Downtown Office',
    category: 'Commercial',
    location: 'Business Bay',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    title: 'Luxury Villa',
    category: 'Residential',
    location: 'Palm Jumeirah',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    title: 'Fashion Boutique',
    category: 'Retail',
    location: 'Dubai Mall',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
  },
  {
    title: 'Corporate HQ',
    category: 'Commercial',
    location: ' DIFC',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
  },
  {
    title: 'Beach Resort',
    category: 'Hospitality',
    location: 'Jebel Ali',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
  },
  {
    title: 'Modern Apartment',
    category: 'Residential',
    location: 'City Walk',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  },
  {
    title: 'Restaurant',
    category: 'Retail',
    location: 'JBR',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
  },
  {
    title: 'Spa & Wellness',
    category: 'Hospitality',
    location: 'Abu Dhabi',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
  },
];

/** First N projects for homepage featured section. */
export const featuredProjectsCount = 3;
