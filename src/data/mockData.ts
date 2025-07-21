import { Jockey, Horse, RaceResult } from '../types';

export const jockeys: Jockey[] = [
  {
    id: 1,
    name: "Takeshi Yamamoto",
    image: "E://Imagehorse.jpeg racing?auto=compress&cs=tinysrgb&w=400",
    wins: 245,
    races: 850,
    winRate: 28.8,
    specialty: "Sprint races",
    experience: 12,
    description: "Champion jockey with exceptional skill in short-distance races. Known for his strategic timing and powerful finishes."
  },
  {
    id: 2,
    name: "Hiroshi Tanaka",
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
    wins: 198,
    races: 720,
    winRate: 27.5,
    specialty: "Distance races",
    experience: 8,
    description: "Skilled in long-distance racing with excellent horse communication skills. Rising star in Japanese horse racing."
  },
  {
    id: 3,
    name: "Kenji Nakamura",
    image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400",
    wins: 312,
    races: 1200,
    winRate: 26.0,
    specialty: "All-around",
    experience: 15,
    description: "Veteran jockey with consistent performance across all race types. Highly respected in the racing community."
  },
  {
    id: 4,
    name: "Yuki Sato",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
    wins: 167,
    races: 650,
    winRate: 25.7,
    specialty: "Muddy tracks",
    experience: 6,
    description: "Specialist in difficult track conditions. Known for maintaining control in challenging weather situations."
  },
  {
    id: 5,
    name: "Masa Kobayashi",
    image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400",
    wins: 289,
    races: 980,
    winRate: 29.5,
    specialty: "Turf races",
    experience: 11,
    description: "Expert on grass tracks with an intuitive understanding of racing dynamics. Multiple championship winner."
  },
  {
    id: 6,
    name: "Ryota Ishida",
    image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400",
    wins: 134,
    races: 540,
    winRate: 24.8,
    specialty: "Young horses",
    experience: 4,
    description: "Young talent with exceptional ability to develop and race with inexperienced horses. Future champion potential."
  },
  {
    id: 7,
    name: "Shingo Watanabe",
    image: "https://images.pexels.com/photos/1212985/pexels-photo-1212985.jpeg?auto=compress&cs=tinysrgb&w=400",
    wins: 356,
    races: 1350,
    winRate: 26.4,
    specialty: "Major stakes",
    experience: 18,
    description: "Legendary jockey with multiple G1 victories. Known for his calm demeanor and strategic racing approach."
  },
  {
    id: 8,
    name: "Taro Miyazaki",
    image: "https://images.pexels.com/photos/1154832/pexels-photo-1154832.jpeg?auto=compress&cs=tinysrgb&w=400",
    wins: 203,
    races: 780,
    winRate: 26.0,
    specialty: "Comeback races",
    experience: 9,
    description: "Specialist in bringing horses back from injury. Excellent rehabilitation racing record and patient approach."
  }
];

export const horses: Horse[] = [
  {
    id: 1,
    name: "Thunder Strike",
    image: "https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&w=400",
    age: 4,
    breed: "Thoroughbred",
    wins: 8,
    races: 12,
    winRate: 66.7,
    speed: 95,
    stamina: 88,
    description: "Powerful stallion with incredible acceleration and top-end speed. Excels in sprint and middle-distance races."
  },
  {
    id: 2,
    name: "Golden Arrow",
    image: "https://images.pexels.com/photos/1996334/pexels-photo-1996334.jpeg?auto=compress&cs=tinysrgb&w=400",
    age: 5,
    breed: "Arabian",
    wins: 12,
    races: 18,
    winRate: 66.7,
    speed: 90,
    stamina: 95,
    description: "Exceptional endurance horse with consistent performance. Known for strong finishes in long-distance races."
  },
  {
    id: 3,
    name: "Midnight Express",
    image: "https://images.pexels.com/photos/1996335/pexels-photo-1996335.jpeg?auto=compress&cs=tinysrgb&w=400",
    age: 3,
    breed: "Thoroughbred",
    wins: 5,
    races: 8,
    winRate: 62.5,
    speed: 92,
    stamina: 85,
    description: "Young champion with impressive early career. Shows great potential for future major race victories."
  },
  {
    id: 4,
    name: "Storm Chaser",
    image: "https://images.pexels.com/photos/1996336/pexels-photo-1996336.jpeg?auto=compress&cs=tinysrgb&w=400",
    age: 6,
    breed: "Quarter Horse",
    wins: 15,
    races: 25,
    winRate: 60.0,
    speed: 88,
    stamina: 90,
    description: "Veteran racer with proven track record. Reliable performer in various weather and track conditions."
  },
  {
    id: 5,
    name: "Royal Phantom",
    image: "https://images.pexels.com/photos/1996337/pexels-photo-1996337.jpeg?auto=compress&cs=tinysrgb&w=400",
    age: 4,
    breed: "Thoroughbred",
    wins: 9,
    races: 15,
    winRate: 60.0,
    speed: 94,
    stamina: 87,
    description: "Elegant and fast with royal bloodlines. Excels in prestigious stakes races and has a strong finishing kick."
  },
  {
    id: 6,
    name: "Desert Wind",
    image: "https://images.pexels.com/photos/1996338/pexels-photo-1996338.jpeg?auto=compress&cs=tinysrgb&w=400",
    age: 5,
    breed: "Arabian",
    wins: 11,
    races: 20,
    winRate: 55.0,
    speed: 86,
    stamina: 93,
    description: "Steady performer with excellent stamina. Thrives in hot weather conditions and long-distance challenges."
  },
  {
    id: 7,
    name: "Lightning Bolt",
    image: "https://images.pexels.com/photos/1996339/pexels-photo-1996339.jpeg?auto=compress&cs=tinysrgb&w=400",
    age: 3,
    breed: "Thoroughbred",
    wins: 6,
    races: 10,
    winRate: 60.0,
    speed: 97,
    stamina: 82,
    description: "Speed demon with explosive starts. Specializes in short-distance races and has broken several track records."
  },
  {
    id: 8,
    name: "Mystic Dawn",
    image: "https://images.pexels.com/photos/1996340/pexels-photo-1996340.jpeg?auto=compress&cs=tinysrgb&w=400",
    age: 4,
    breed: "Thoroughbred",
    wins: 7,
    races: 13,
    winRate: 53.8,
    speed: 89,
    stamina: 91,
    description: "Balanced performer with strategic racing style. Known for patient running and strong late-race surges."
  }
];

export const mockRaceResults: RaceResult[] = [
  {
    id: "race-001",
    raceDate: new Date("2024-01-15"),
    winningJockey: jockeys[0],
    winningHorse: horses[0],
    raceTime: "1:23.45",
    payoutMultiplier: 3.2
  },
  {
    id: "race-002",
    raceDate: new Date("2024-01-20"),
    winningJockey: jockeys[2],
    winningHorse: horses[1],
    raceTime: "2:15.67",
    payoutMultiplier: 2.8
  }
];