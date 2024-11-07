'use client';

import { PlaceholderContextProvider } from '@/context/PlaceholderContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return <PlaceholderContextProvider>{children}</PlaceholderContextProvider>;
}
