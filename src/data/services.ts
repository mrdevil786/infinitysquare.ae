/**
 * Services and process data. Single source of truth for services and index pages.
 * Icons are referenced by key; pages map keys to Lucide components for tree-shaking.
 */

export type ServiceIconKey = 'House' | 'Building2' | 'ShoppingBag' | 'Palette';

export interface ServiceEntry {
  id: string;
  iconKey: ServiceIconKey;
  title: string;
  /** Short teaser for homepage. */
  shortDescription: string;
  /** Full description for services page. */
  description: string;
  features: string[];
  image: string;
}

export const servicesData: ServiceEntry[] = [
  {
    id: 'residential',
    iconKey: 'House',
    title: 'Residential Interior Design',
    shortDescription: 'Transform your home into a sanctuary of style and comfort.',
    description:
      'Transform your home into a sanctuary that reflects your personal style and enhances your daily life.',
    features: [
      'Luxury Villa Design',
      'Apartment Renovation',
      'Penthouse Interiors',
      'Kitchen & Bathroom Design',
      'Bedroom & Living Spaces',
      'Home Office Solutions',
    ],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
  },
  {
    id: 'commercial',
    iconKey: 'Building2',
    title: 'Commercial Interior Design',
    shortDescription: 'Create inspiring workspaces that boost productivity.',
    description:
      'Create workspaces that inspire productivity, foster collaboration, and leave lasting impressions.',
    features: [
      'Office Space Design',
      'Corporate Headquarters',
      'Coworking Spaces',
      'Conference Rooms',
      'Reception Areas',
      'Workspace Optimization',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    id: 'retail',
    iconKey: 'ShoppingBag',
    title: 'Retail Interior Design',
    shortDescription: 'Design memorable shopping experiences for your customers.',
    description:
      'Design memorable shopping experiences that engage customers and boost brand visibility.',
    features: [
      'Store Design',
      'Showroom Interiors',
      'Shopping Mall Units',
      'Brand Visualization',
      'Display Systems',
      'Customer Flow Optimization',
    ],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
  },
  {
    id: 'visualization',
    iconKey: 'Palette',
    title: '3D Visualization & Rendering',
    shortDescription: 'See your vision come to life before construction begins.',
    description:
      'See your vision come to life before construction begins with our state-of-the-art rendering services.',
    features: [
      'Photo-Realistic Renderings',
      'Virtual Tours',
      '360° Panoramas',
      'Animation Walkthroughs',
      'Material Selection',
      'Lighting Design',
    ],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Consultation',
    description:
      'We discuss your vision, requirements, and budget to understand your needs.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Our team creates detailed designs and 3D visualizations for your approval.',
  },
  {
    step: '03',
    title: 'Execution',
    description: 'We manage the entire project, from procurement to installation.',
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Your transformed space is ready for you to enjoy.',
  },
];
