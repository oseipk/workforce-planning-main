// context/EnvironmentalContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Article {
  title: string;
  url: string;
  summary: string;
  date?: string;
}

interface EnvironmentalContextType {
  articles: Article[];
  setArticles: (articles: Article[]) => void;
}

const EnvironmentalContext = createContext<EnvironmentalContextType | undefined>(undefined);

export const EnvironmentalProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([]);

  return (
    <EnvironmentalContext.Provider value={{ articles, setArticles }}>
      {children}
    </EnvironmentalContext.Provider>
  );
};

export const useEnvironmental = (): EnvironmentalContextType => {
  const context = useContext(EnvironmentalContext);
  if (!context) {
    throw new Error('useEnvironmental must be used within an EnvironmentalProvider');
  }
  return context;
};
