'use client';

import { useState, useEffect } from 'react';
import { Search, Play, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface VideoCard {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  thumbnail: string;
  ctaText: string;
  ctaLink: string;
}

interface HelpContent {
  searchPlaceholder: string;
  anytimeTitle: string;
  anytimeDescription: string;
  videos: VideoCard[];
}

export default function HelpSection() {
  const [content, setContent] = useState<HelpContent | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  useEffect(() => {
    const helpData: HelpContent = {
      searchPlaceholder: 'Search a topic',
      anytimeTitle: 'DMV Anytime',
      anytimeDescription: 'Most DMV business can be started and/or completed online without visiting a DMV office.',
      videos: [
        {
          id: 1,
          title: 'MyDMV Saves You Time',
          description: 'If you have a card, you have an account. Use MyDMV for faster, personalized online service.',
          videoUrl: '#',
          duration: '1:33',
          thumbnail: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg',
          ctaText: 'Claim account or login',
          ctaLink: '/mydmv'
        },
        {
          id: 2,
          title: 'Registration Renewal',
          description: 'Renew your vehicle registration online from the convenience of wherever you are.',
          videoUrl: '#',
          duration: '0:15',
          thumbnail: 'https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg',
          ctaText: 'Renew registration',
          ctaLink: '/renewal'
        },
        {
          id: 3,
          title: 'Occupational Licensing',
          description: 'OL protects California drivers through licensing and regulating vehicle industry services.',
          videoUrl: '#',
          duration: '2:39',
          thumbnail: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg',
          ctaText: 'Occupational licensing login',
          ctaLink: '/ol-login'
        }
      ]
    };

    setContent(helpData);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  if (!content) {
    return null;
  }

  return (
    <section className="w-full bg-gray-50 py-16 relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-[#1a3a52] mb-8">
            How can we help?
          </h2>

          <form onSubmit={handleSearch} className="max-w-md mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={content.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-500"
              />
            </div>
          </form>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-[#1a3a52] text-center mb-3">
            {content.anytimeTitle}
          </h3>
          <p className="text-center text-gray-700 text-base max-w-2xl mx-auto">
            {content.anytimeDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.videos.map((video) => (
            <div key={video.id} className="flex flex-col">
              <div className="mb-4">
                <h4 className="text-xl font-serif font-bold text-[#1a3a52] mb-2">
                  {video.title}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>

              <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-4 aspect-video group cursor-pointer"
                onClick={() => setSelectedVideo(video.id)}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 group-hover:bg-white transition-all rounded-full p-4 flex items-center justify-center">
                    <Play className="w-6 h-6 text-gray-900 fill-gray-900" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              <Link
                href={video.ctaLink}
                className="inline-flex items-center gap-2 px-4 py-3 border border-blue-300 text-blue-600 hover:bg-blue-50 transition-colors font-semibold text-sm rounded"
              >
                {video.ctaText}
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <button className="fixed bottom-8 right-8 bg-yellow-400 hover:bg-yellow-500 transition-colors text-gray-900 font-bold px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-40">
        <MessageCircle className="w-5 h-5" />
        Ask DMV
      </button>

      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm font-semibold" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
        Feedback
      </div>
    </section>
  );
}
