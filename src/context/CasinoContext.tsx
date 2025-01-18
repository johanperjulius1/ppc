// contexts/CasinoContext.tsx
'use client';

import React, { createContext, useContext } from 'react';
import { Casino } from '@/types/types';

type CasinoContextType = {
  casinos: Casino[];
};

const CasinoContext = createContext<CasinoContextType | undefined>(undefined);

export const CasinoProvider: React.FC<{ children: React.ReactNode; casinos: Casino[] }> = ({
  children,
  casinos,
}) => {
  return (
    <CasinoContext.Provider value={{ casinos }}>
      {children}
    </CasinoContext.Provider>
  );
};

export const useCasinoContext = () => {
  const context = useContext(CasinoContext);
  if (!context) {
    throw new Error('useCasinoContext must be used within a CasinoProvider');
  }
  return context;
};
