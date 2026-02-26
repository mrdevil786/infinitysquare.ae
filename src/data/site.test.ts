import { describe, it, expect } from 'vitest';
import {
  navLinks,
  contactInfo,
  footerServices,
  footerCompany,
  getFooterContactEntries,
} from './site';

describe('site data', () => {
  it('exports navLinks with expected routes', () => {
    expect(navLinks).toHaveLength(5);
    expect(navLinks.map((l) => l.href)).toEqual([
      '/',
      '/about',
      '/services',
      '/portfolio',
      '/contact',
    ]);
    expect(navLinks.every((l) => l.name.length > 0)).toBe(true);
  });

  it('exports contactInfo with address, emails, phones, officeHours', () => {
    expect(contactInfo.address).toMatchObject({
      studioName: expect.any(String),
      street: expect.any(String),
      city: expect.any(String),
    });
    expect(Array.isArray(contactInfo.emails)).toBe(true);
    expect(Array.isArray(contactInfo.phones)).toBe(true);
    expect(contactInfo.emails.length).toBeGreaterThan(0);
    expect(contactInfo.phones.length).toBeGreaterThan(0);
    expect(typeof contactInfo.officeHours).toBe('string');
  });

  it('footerServices and footerCompany have name and href', () => {
    expect(footerServices.every((l) => l.name && l.href)).toBe(true);
    expect(footerCompany.every((l) => l.name && l.href)).toBe(true);
  });

  it('getFooterContactEntries returns label/value pairs', () => {
    const entries = getFooterContactEntries();
    expect(entries.length).toBeGreaterThan(0);
    expect(entries.every((e) => e.label && e.value)).toBe(true);
  });
});
