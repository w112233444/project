'use client';

import Link from 'next/link';
import { Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  { label: 'About DMV', href: '/about' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Conditions of Use', href: '/conditions' },
  { label: 'Site Map', href: '/sitemap' },
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'Forms', href: '/forms' },
  { label: 'Share Screen', href: '/share-screen' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/cadmv', label: 'Facebook' },
  { icon: 'X', href: 'https://twitter.com/CA_DMV', label: 'X' },
  { icon: Youtube, href: 'https://youtube.com/cadmv', label: 'YouTube' },
  { icon: Instagram, href: 'https://instagram.com/ca_dmv', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/ca-dmv', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8">
        {/* 版权信息 */}
        <div className="mb-4">
          <p className="text-gray-600 text-sm">
            Copyright © {new Date().getFullYear()} State of California
          </p>
        </div>

        {/* 链接列表 */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6">
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-[#0066A1] hover:text-[#005080] text-sm font-semibold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* 社交媒体图标 */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social, index) => {
            if (social.icon === 'X') {
              // X (Twitter) 自定义图标
              return (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-[#0066A1] transition-colors border-2 border-gray-400 hover:border-[#0066A1] rounded-full"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              );
            }
            
            const Icon = social.icon as any;
            return (
              <Link
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-[#0066A1] transition-colors border-2 border-gray-400 hover:border-[#0066A1] rounded-full"
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
