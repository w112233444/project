'use client';

import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  channel: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    channel: 'ONLINE',
    rating: 5,
    text: 'I appreciated the email reminder to renew my registration, as well as the MyDMV site having the vehicle information already available, making it easy to renew.'
  },
  {
    id: 2,
    channel: 'OVER THE PHONE',
    rating: 5,
    text: 'This agent was personable, knowledgeable, responded to all our questions and needs, and helped us find out best solution.'
  },
  {
    id: 3,
    channel: 'IN PERSON',
    rating: 5,
    text: 'The efficiency and professionalism of the agent helping me was above and beyond my wildest expectation. Thumbs UP. Best DMV experience ever.'
  }
];

export default function CustomerTestimonials() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-serif font-bold text-[#1a3a52] mb-12 text-left">
          Our Customers Say...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-100"
            >
              <h3 className="text-lg font-bold text-[#1a3a52] mb-3">
                {testimonial.channel}
              </h3>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
