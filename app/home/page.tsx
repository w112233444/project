'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  DMVHeader,
  FraudAlert,
  HelpSection,
  ServiceOptions,
  SpecializedGroups,
  CustomerTestimonials,
  Footer,
} from './components';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Slide {
  id: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  desktopImage: string;
  mobileImage: string;
  imageAlt?: string;
  imagePosition: {
    desktop: string;
    mobile: string;
  };
  textAlignment: 'left' | 'center';
  verticalAlignment: 'top' | 'middle';
  verticalAlignmentMobile: 'top' | 'middle';
  textColor: string;
  backgroundColor?: string;
}

const slides: Slide[] = [
  {
    id: '1',
    title: "Same License. New Look.<br>All California.",
    description: "California's most secure license yet.",
    desktopImage: 'https://www.dmv.ca.gov/portal/uploads/2025/09/DL_webbanner_Road_redwood-1.jpg',
    mobileImage: 'https://www.dmv.ca.gov/portal/uploads/2025/12/DL_Mobile_480wx340_v3.png',
    imagePosition: {
      desktop: '50% 54%',
      mobile: '52% 47%',
    },
    textAlignment: 'center',
    verticalAlignment: 'top',
    verticalAlignmentMobile: 'top',
    textColor: 'has-ca-dmv-dark-blue-heading-color',
  },
  {
    id: '2',
    title: "If you have a card,<br>you have an account",
    description: '<strong>Set up your MyDMV today</strong>.',
    buttonText: 'Learn More',
    buttonLink: '/portal/mydmv-account/',
    desktopImage: 'https://www.dmv.ca.gov/portal/uploads/2025/10/MyDmv_web_banner_lady-2-1536x454-1.png',
    mobileImage: 'https://www.dmv.ca.gov/portal/uploads/2025/12/My_DMV_Mobile_480wx340t_V2.jpg',
    imagePosition: {
      desktop: '62% 54%',
      mobile: '54% 62%',
    },
    textAlignment: 'left',
    verticalAlignment: 'middle',
    verticalAlignmentMobile: 'middle',
    textColor: 'has-ca-dmv-dark-blue-heading-color has-ca-gray-text-color',
  },
  {
    id: '3',
    title: 'Quick. Easy. Online.',
    description: 'Join tens of millions of Californians renewing vehicle registration online.',
    buttonText: 'Renew in Minutes',
    buttonLink: '/portal/vehicle-registration/vehicle-registration-renewal/',
    desktopImage: 'https://www.dmv.ca.gov/portal/uploads/2025/08/REG_web_banner.jpg',
    mobileImage: 'https://www.dmv.ca.gov/portal/uploads/2025/12/Vehical_Reg_Mobile_480wx340_V2.png',
    imagePosition: {
      desktop: '69% 56%',
      mobile: '45% 53%',
    },
    textAlignment: 'left',
    verticalAlignment: 'middle',
    verticalAlignmentMobile: 'top',
    textColor: 'has-ca-dmv-dark-blue-heading-color has-ca-gray-text-color',
    backgroundColor: 'has-white-background-color',
  },
];

export default function HomePage() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // 每5秒自动切换

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="min-h-screen bg-gray-50">
      <DMVHeader />
      
      {/* 轮播图 */}
      <div className="relative w-full overflow-hidden h-[340px] md:h-[480px]">
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {slides.map((slide, index) => (
              <CarouselItem key={slide.id} className="h-full pl-0">
                <div
                  className={cn(
                    'relative w-full h-full overflow-hidden',
                    slide.backgroundColor === 'has-white-background-color' && 'bg-white/20'
                  )}
                >
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={slide.desktopImage}
                      alt={slide.imageAlt || slide.title.replace(/<br\s*\/?>/gi, ' ')}
                      fill
                      className="object-cover hidden md:block"
                      style={{
                        objectPosition: slide.imagePosition.desktop,
                      }}
                      sizes="100vw"
                      priority={index === 0}
                    />
                    <Image
                      src={slide.mobileImage}
                      alt={slide.imageAlt || slide.title.replace(/<br\s*\/?>/gi, ' ')}
                      fill
                      className="object-cover block md:hidden"
                      style={{
                        objectPosition: slide.imagePosition.mobile,
                      }}
                      sizes="100vw"
                      priority={index === 0}
                    />
                  </div>

                  <div className="absolute inset-0" />

                  <div
                    className={cn(
                      'relative z-10 h-full flex flex-col',
                      slide.textAlignment === 'center' ? 'items-center text-center' : 'items-start text-left',
                      slide.verticalAlignment === 'top' 
                        ? 'justify-start pt-8 md:pt-12 lg:pt-16' 
                        : slide.verticalAlignmentMobile === 'top'
                        ? 'justify-center md:justify-center pt-8 md:pt-0'
                        : 'justify-center',
                      'px-6 md:px-12 lg:px-16',
                      slide.textAlignment === 'center' ? 'max-w-full' : 'max-w-full md:max-w-2xl lg:max-w-3xl'
                    )}
                  >
                    <div className={cn(
                      'inner-text',
                      slide.textAlignment === 'center' ? 'w-full max-w-4xl' : 'w-full'
                    )}>
                      <h2
                        className={cn(
                          'font-bold mb-3 md:mb-4 leading-tight',
                          'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
                          slide.textColor.includes('has-ca-dmv-dark-blue-heading-color') && 'text-[#1a3a52]',
                          slide.textColor.includes('has-black-text-color') && 'text-[#1a3a52]',
                          slide.textColor.includes('has-ca-gray-text-color') && 'text-gray-700'
                        )}
                        style={{ 
                          fontFamily: 'Arial, sans-serif',
                          textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)'
                        }}
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      />
                      <p
                        className={cn(
                          'font-bold mb-6 md:mb-8',
                          'text-base sm:text-lg md:text-xl lg:text-2xl',
                          slide.textColor.includes('has-ca-dmv-dark-blue-heading-color') && 'text-[#1a3a52]',
                          slide.textColor.includes('has-black-text-color') && 'text-[#1a3a52]',
                          slide.textColor.includes('has-ca-gray-text-color') && 'text-gray-700'
                        )}
                        style={{ 
                          fontFamily: 'Arial, sans-serif',
                          textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)'
                        }}
                        dangerouslySetInnerHTML={{ __html: slide.description }}
                      />
                      {slide.buttonText && slide.buttonLink && (
                        <Link href={slide.buttonLink}>
                          <Button
                            size="lg"
                            className="bg-[#0066A1] hover:bg-[#005080] text-white px-8 py-6 text-base md:text-lg font-semibold shadow-lg"
                          >
                            {slide.buttonText}
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* 指示器 */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                'w-10 h-10 rounded-full transition-all flex items-center justify-center font-semibold text-sm',
                current === index 
                  ? 'bg-[#1a3a52] text-white shadow-lg' 
                  : 'bg-white/90 text-[#1a3a52] border-2 border-[#1a3a52] hover:bg-white'
              )}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* 页面内容区域 */}
      <FraudAlert />
      <HelpSection />
      <ServiceOptions />
      <SpecializedGroups />
      <CustomerTestimonials />
      
      {/* 底部 */}
      <Footer />
    </div>
  );
}
