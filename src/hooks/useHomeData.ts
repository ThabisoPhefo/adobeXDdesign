import { useState, useEffect } from 'react';
import type { HomePageData } from '../types';
import homeData from '../data/home.json';

export const useHomeData = () => {
  const [data, setData] = useState<HomePageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Simulate async loading for consistency
      setTimeout(() => {
        setData(homeData as HomePageData);
        setLoading(false);
      }, 100);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
};
