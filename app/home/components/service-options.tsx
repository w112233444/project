'use client';

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServiceOption {
  id: number;
  title: string;
  description: string;
  link: string;
  href: string;
  highlight?: boolean;
}

interface ServicesData {
  serviceOptions: ServiceOption[];
}

export default function ServiceOptions() {
  const [services, setServices] = useState<ServiceOption[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services');
        const data: ServicesData = await response.json();
        setServices(data.serviceOptions);
      } catch (error) {
        console.error('Failed to fetch services data:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <h2 className="text-4xl font-serif font-bold text-[#1a3a52] mb-12">
          More Service Options
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-blue-50 rounded-lg p-8 flex flex-col"
            >
              <h3 className="text-xl font-bold text-[#1a3a52] mb-4">
                {service.title}
              </h3>

              <p className="text-gray-700 text-base leading-relaxed mb-6 flex-grow">
                {service.description}
                {service.highlight && (
                  <span className="block font-bold text-gray-900 mt-3">
                    Additional service fees may apply.
                  </span>
                )}
              </p>

              <Link
                href={service.href}
                className="inline-flex items-center gap-2 px-4 py-3 border border-blue-200 text-blue-600 hover:bg-blue-100 transition-colors font-semibold text-sm rounded"
              >
                {service.link}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
