'use client';

import Link from 'next/link';
import { Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  { title: 'About DMV', href: '/about' },
  { title: 'Privacy Policy', href: '/privacy' },
  { title: 'Cookie Policy', href: '/cookies' },
  { title: 'Conditions of Use', href: '/conditions' },
  { title: 'Site Map', href: '/sitemap' },
  { title: 'Accessibility', href: '/accessibility' },
  { title: 'Forms', href: '/forms' },
  { title: 'Share Screen', href: '/share-screen' }
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/dmv', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/dmv', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com/dmv', label: 'YouTube' },
  { icon: Instagram, href: 'https://instagram.com/dmv', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/dmv', label: 'LinkedIn' }
];

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-12">
        <div className="mb-8">
          <p className="text-gray-600 text-sm">
            Copyright © 2026 State of California
          </p>
        </div>

        <div className="flex flex-wrap gap-6 mb-8 text-sm">
          {footerLinks.map((link, index) => (
            <div key={index} className="flex items-center gap-6">
              <Link
                href={link.href}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                {link.title}
              </Link>
              {index < footerLinks.length - 1 && (
                <div className="hidden sm:block w-px h-4 bg-gray-300" />
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <Link
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-gray-600 hover:text-gray-900 transition-colors border border-gray-300 rounded-full p-2"
              >
                <Icon className="w-5 h-5" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
