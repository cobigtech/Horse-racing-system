export interface User {
  id: string;
  email: string;
  name: string;
  balance: number;
  isAuthenticated: boolean;
}

export interface Jockey {
  id: number;
  name: string;
  image: string;
  wins: number;
  races: number;
  winRate: number;
  specialty: string;
  experience: number;
  description: string;
}

export interface Horse {
  id: number;
  name: string;
  image: string;
  age: number;
  breed: string;
  wins: number;
  races: number;
  winRate: number;
  speed: number;
  stamina: number;
  description: string;
}

export interface LotteryTicket {
  id: string;
  userId: string;
  jockey: Jockey;
  horse: Horse;
  betAmount: number;
  ticketNumber: string;
  purchaseDate: Date;
  status: 'pending' | 'won' | 'lost';
  winAmount?: number;
}

export interface RaceResult {
  id: string;
  raceDate: Date;
  winningJockey: Jockey;
  winningHorse: Horse;
  raceTime: string;
  payoutMultiplier: number;
}