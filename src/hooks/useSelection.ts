import { useState } from 'react';
import { Jockey, Horse } from '../types';

export const useSelection = () => {
  const [selectedJockey, setSelectedJockey] = useState<Jockey | null>(null);
  const [selectedHorse, setSelectedHorse] = useState<Horse | null>(null);
  const [betAmount, setBetAmount] = useState<number>(1000);

  const clearSelection = () => {
    setSelectedJockey(null);
    setSelectedHorse(null);
    setBetAmount(1000);
  };

  const isSelectionComplete = () => {
    return selectedJockey !== null && selectedHorse !== null && betAmount > 0;
  };

  return {
    selectedJockey,
    selectedHorse,
    betAmount,
    setSelectedJockey,
    setSelectedHorse,
    setBetAmount,
    clearSelection,
    isSelectionComplete
  };
};