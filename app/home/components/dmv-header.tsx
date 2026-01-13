'use client';

import { useState, useEffect } from 'react';
import { Star, MapPin, Globe, User, ChevronDown, Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface TopNavItem {
  id: number;
  label: string;
  icon: string;
  href: string;
}

interface SubItem {
  id: number;
  label: string;
  href: string;
}

interface MainNavItem {
  id: number;
  label: string;
  hasDropdown: boolean;
  href: string;
  subItems?: SubItem[];
}

interface NavigationData {
  topNav: TopNavItem[];
  mainNav: MainNavItem[];
}

const iconMap: Record<string, any> = {
  star: Star,
  'map-pin': MapPin,
  globe: Globe,
  user: User,
};

export default function DMVHeader() {
  const [navData, setNavData] = useState<NavigationData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  useEffect(() => {
    const fetchNavigation = async () => {
      try {
        const response = await fetch('/api/navigation');
        const data = await response.json();
        setNavData(data);
      } catch (error) {
        console.error('Failed to fetch navigation data:', error);
      }
    };

    fetchNavigation();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  if (!navData) {
    return null;
  }

  return (
    <header className="w-full">
      <div className="bg-gradient-to-r from-[#0066A1] to-[#1E88C7] shadow-md">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full w-[62px] h-[62px] flex items-center justify-center shadow-lg">
                  <span className="text-[#0066A1] font-bold text-2xl tracking-tight">CA</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[10px] font-medium tracking-wider leading-tight">STATE OF CALIFORNIA</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-white font-black text-[40px] leading-none tracking-tighter italic" style={{ fontFamily: 'Arial Black, sans-serif' }}>DMV</span>
                  </div>
                  <span className="text-white text-[9px] font-normal tracking-wide leading-tight opacity-95">DEPARTMENT OF MOTOR VEHICLES</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8">
              {navData.topNav.map((item) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity group"
                  >
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      {IconComponent && <IconComponent className="w-4 h-4 text-white" />}
                    </div>
                    <span className="text-sm font-semibold tracking-wide">{item.label}</span>
                  </Link>
                );
              })}

              <form onSubmit={handleSearch} className="relative">
                <div className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: '320px' }}>
                  <div className="flex items-center flex-1 pl-5 pr-3">
                    <Search className="w-5 h-5 text-gray-400 mr-3" />
                    <input
                      type="text"
                      placeholder="Search here..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 py-3 text-gray-700 placeholder-gray-400 focus:outline-none text-sm font-normal"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#0066A1] hover:bg-[#005080] transition-colors px-5 h-full flex items-center justify-center"
                  >
                    <ArrowRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {navData.mainNav.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.id)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-2 px-6 py-5 text-[#1a3a52] font-bold text-base hover:bg-gray-50 transition-colors"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>

                {item.hasDropdown && item.subItems && openDropdown === item.id && (
                  <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-xl rounded-b-md min-w-[280px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={subItem.href}
                        className="block px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#0066A1] transition-colors first:rounded-t-md last:rounded-b-md"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
