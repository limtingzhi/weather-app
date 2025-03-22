import { useCallback, useState } from 'react';
import { SearchHistoryItem } from '../typings/typings';

interface UseHistory {
  deleteHistory: (timestamp: number) => void;
  history: SearchHistoryItem[];
  updateHistory: (city: string, country: string) => void;
}

const MAX_HISTORY = 10;

const useHistory = (): UseHistory => {
  const [history, setHistory] = useState<SearchHistoryItem[]>([]);

  const updateHistory = useCallback((city: string, country: string) => {
    const tempHistory = [...history];

    const search: SearchHistoryItem = {
      city,
      country,
      timestamp: Date.now(),
    };

    tempHistory.unshift(search);

    if (tempHistory.length > MAX_HISTORY) {
      tempHistory.pop();
    }

    setHistory(tempHistory);
  }, [history]);

  const deleteHistory = useCallback((timestamp: number) => {
    const tempHistory = history.filter(h => timestamp !== h.timestamp);
    setHistory(tempHistory);
  }, [history]);

  return { history, updateHistory, deleteHistory };
};

export {
  useHistory,
};
