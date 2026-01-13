'use client';

import { AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function FraudAlert() {
  return (
    <div className="w-full bg-yellow-50 border-l-4 border-yellow-400">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-0.5">
            <AlertCircle className="w-6 h-6 text-yellow-600" />
          </div>
          <div className="flex-1">
            <p className="text-base text-gray-800">
              <span className="font-bold text-gray-900">Be Aware of Fraud</span>
              {' – '}
              Watch for suspicious emails, messages, or websites impersonating DMV.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/fraud-alert"
              className="text-blue-600 hover:text-blue-800 font-semibold text-sm whitespace-nowrap ml-4"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
