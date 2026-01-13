'use client';

import Link from 'next/link';

interface GuideLink {
  id: number;
  title: string;
  href: string;
}

const guides: GuideLink[] = [
  {
    id: 1,
    title: 'New to California Guide',
    href: '/guides/new-california'
  },
  {
    id: 2,
    title: 'Teen Driver Guide',
    href: '/guides/teen-driver'
  },
  {
    id: 3,
    title: 'Senior Drivers Guide',
    href: '/guides/senior-drivers'
  },
  {
    id: 4,
    title: 'People With Disabilities Guide',
    href: '/guides/disabilities'
  },
  {
    id: 5,
    title: 'Veterans & Active Military Guide',
    href: '/guides/veterans'
  },
  {
    id: 6,
    title: 'Motorcyclists Guide',
    href: '/guides/motorcyclists'
  },
  {
    id: 7,
    title: 'Truck Drivers Guide',
    href: '/guides/truck-drivers'
  },
  {
    id: 8,
    title: 'Boat & Vessel Owners Guide',
    href: '/guides/boat-owners'
  },
  {
    id: 9,
    title: 'Bicyclists & Pedestrians Guide',
    href: '/guides/bicyclists'
  }
];

export default function SpecializedGroups() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-[#1a3a52] mb-6">
            Specialized Groups of<br />Drivers
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-base leading-relaxed">
            The DMV offers tips to help unique groups—like teens, seniors, veterans, disabled persons, new Californians, commercial drivers, and motorcyclists—successfully complete their DMV business and stay safe on the road.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="border-b border-gray-200 pb-4"
            >
              <Link
                href={guide.href}
                className="text-blue-600 hover:text-blue-800 hover:underline font-semibold text-base transition-colors"
              >
                {guide.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
