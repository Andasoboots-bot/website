'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to default locale on mount
    router.replace(`/${routing.defaultLocale}`);
  }, [router]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#a41e21] border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-medium text-[#1a1a1a]">Loading ANDASO...</p>
      </div>
    </div>
  );
}
