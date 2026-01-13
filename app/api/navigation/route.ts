import { NextResponse } from 'next/server';

export async function GET() {
  const navigationData = {
    topNav: [
      { id: 1, label: 'REAL ID', icon: 'star', href: '/real-id' },
      { id: 2, label: 'Online Services', icon: 'map-pin', href: '/online-services' },
      { id: 3, label: 'Translate', icon: 'globe', href: '/translate' },
      { id: 4, label: 'MyDMV', icon: 'user', href: '/my-dmv' }
    ],
    mainNav: [
      {
        id: 1,
        label: 'Vehicle Registration',
        hasDropdown: true,
        href: '/vehicle-registration',
        subItems: [
          { id: 11, label: 'Register a Vehicle', href: '/vehicle-registration/register' },
          { id: 12, label: 'Renew Registration', href: '/vehicle-registration/renew' },
          { id: 13, label: 'Replace Registration', href: '/vehicle-registration/replace' }
        ]
      },
      {
        id: 2,
        label: "Driver's Licenses & IDs",
        hasDropdown: true,
        href: '/drivers-licenses',
        subItems: [
          { id: 21, label: 'Apply for a License', href: '/drivers-licenses/apply' },
          { id: 22, label: 'Renew License', href: '/drivers-licenses/renew' },
          { id: 23, label: 'Replace License', href: '/drivers-licenses/replace' }
        ]
      },
      {
        id: 3,
        label: 'Make a Payment',
        hasDropdown: true,
        href: '/payments',
        subItems: [
          { id: 31, label: 'Pay Registration Fees', href: '/payments/registration' },
          { id: 32, label: 'Pay Traffic Tickets', href: '/payments/tickets' },
          { id: 33, label: 'Pay Other Fees', href: '/payments/other' }
        ]
      },
      {
        id: 4,
        label: 'Appointments',
        hasDropdown: true,
        href: '/appointments',
        subItems: [
          { id: 41, label: 'Schedule Appointment', href: '/appointments/schedule' },
          { id: 42, label: 'Reschedule Appointment', href: '/appointments/reschedule' },
          { id: 43, label: 'Cancel Appointment', href: '/appointments/cancel' }
        ]
      },
      {
        id: 5,
        label: 'Testing',
        hasDropdown: true,
        href: '/testing',
        subItems: [
          { id: 51, label: 'Knowledge Test', href: '/testing/knowledge' },
          { id: 52, label: 'Behind-the-Wheel Test', href: '/testing/driving' },
          { id: 53, label: 'Test Preparation', href: '/testing/prep' }
        ]
      },
      {
        id: 6,
        label: 'Check Status',
        hasDropdown: true,
        href: '/check-status',
        subItems: [
          { id: 61, label: 'Registration Status', href: '/check-status/registration' },
          { id: 62, label: 'License Status', href: '/check-status/license' },
          { id: 63, label: 'Appointment Status', href: '/check-status/appointment' }
        ]
      }
    ]
  };

  return NextResponse.json(navigationData);
}
