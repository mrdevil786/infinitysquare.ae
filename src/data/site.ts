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
    studioName: 'Infinity Square LLC',
    street: 'Sheikh Zayed Road',
    city: 'Dubai, United Arab Emirates',
  },
  emails: ['hello@infinitysquare.ae', 'projects@infinitysquare.ae'],
  phones: ['+971 4 123 4567', '+971 50 987 6543'],
  officeHours: 'Sunday - Thursday: 9:00 AM - 7:00 PM\nFriday - Saturday: Closed',
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
