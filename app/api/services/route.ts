import { NextResponse } from 'next/server';

export async function GET() {
  const servicesData = {
    fraud: {
      title: 'Be Aware of Fraud',
      description: 'Watch for suspicious emails, messages, or websites impersonating DMV.',
      learnMoreLink: '/fraud-alert'
    },
    serviceOptions: [
      {
        id: 1,
        title: 'DMV Kiosks',
        description: 'Convenient self-service touchscreen machines are available at select DMV field offices and retail locations. These kiosks provide a fast and efficient way for customers to complete registration, driver\'s license transactions, and other services without needing to wait in line.',
        link: 'Find a kiosk near you',
        href: '/kiosks'
      },
      {
        id: 2,
        title: 'Business Partners',
        description: 'DMV-authorized business partners offer registration services like renewals, plates, stickers, title transfers, and reports of sale — often with little or no wait. Additional service fees may apply.',
        link: 'Find a DMV partner near you',
        href: '/partners',
        highlight: true
      },
      {
        id: 3,
        title: 'Industry Services',
        description: 'DMV offers a range of industry services, including licensing for vehicle dealers, manufacturers, and transporters, programs for motor carriers and autonomous vehicles, and electronic titling. Industry Business Centers provide support for industry partners.',
        link: 'Access industry services hub',
        href: '/industry-services'
      }
    ]
  };

  return NextResponse.json(servicesData);
}
