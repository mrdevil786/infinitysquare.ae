/**
 * Centralized site data for Infinity Square LLC.
 * Single source of truth for navigation, footer, and contact information.
 */

export interface NavLink {
  name: string;
  href: string;
}

export interface ContactAddress {
  studioName: string;
  street: string;
  city: string;
}

export interface ContactInfo {
  address: ContactAddress;
  emails: string[];
  phones: string[];
  officeHours: string;
}

/** Main navigation links (Header and Footer alignment). */
export const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

/** Contact details used on Contact page and Footer. */
export const contactInfo: ContactInfo = {
  address: {
    studioName: 'Office 3304, Saeed Tower 1',
    street: 'Sheikh Zayed Road',
    city: 'Dubai, United Arab Emirates',
  },
  emails: ['info@infinityaquare.ae'],
  phones: ['+971 58 238 0073'],
  officeHours: 'Monday - Saturday: 8:00 AM - 5:00 PM\nSunday: Closed',
};

/** Footer service links (anchors on services page). */
export const footerServices: NavLink[] = [
  { name: 'Residential', href: '/services#residential' },
  { name: 'Commercial', href: '/services#commercial' },
  { name: 'Retail', href: '/services#retail' },
  { name: '3D Visualization', href: '/services#visualization' },
];

/** Footer company links. */
export const footerCompany: NavLink[] = [
  { name: 'About Us', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

export interface SocialLink {
  name: string;
  href: string;
  icon: 'facebook' | 'instagram' | 'linkedin';
}

/** Social media links. */
export const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    href: '#',
    icon: 'facebook',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/infinitysquarellc?igsh=bnN6MDU5N28wMmlz&utm_source=qr',
    icon: 'instagram',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/infinity-square/',
    icon: 'linkedin',
  },
];

/** Footer contact section as label/value pairs (derived from contactInfo). */
export function getFooterContactEntries(): { label: string; value: string }[] {
  const { address, emails, phones } = contactInfo;
  const addressLine = `${address.studioName}, ${address.street}, ${address.city}`;
  return [
    { label: 'Address', value: addressLine },
    { label: 'Email', value: emails[0] ?? '' },
    { label: 'Phone', value: phones[0] ?? '' },
  ];
}
