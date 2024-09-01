function getRandomTailwindColor() {
    const colors = {
      'red': '#EF4444',
      'yellow': '#F59E0B',
      'green': '#10B981',
      'blue': '#3B82F6',
      'indigo': '#6366F1',
      'purple': '#A855F7',
      'pink': '#EC4899',
      'orange': '#F97316',
    };
  
    const colorNames = Object.keys(colors);
    const randomColorName = colorNames[Math.floor(Math.random() * colorNames.length)];
    return colors[randomColorName];
  }
  
  export function hexToRGBA(hex, opacity) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
  
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  

export const SONGS = [
    {
      id: 1,
      name: 'Atif Aslam Mix',
      artists: 'Atif Aslam',
      img: '/AtifAslamp.png',
      duration: '4:35',
      color: {
        primary: getRandomTailwindColor(),
        secondary: hexToRGBA(getRandomTailwindColor(), 0.8),
      },
    },
    {
      id: 2,
      name: 'Arijit Singh Mix',
      artists: 'Arijit Singh',
      img: '/AR.png',
      duration: '5:10',
      color: {
        primary: getRandomTailwindColor(),
      },
    },
    {
      id: 3,
      name: 'Neha Kakkar Mix',
      artists: 'Neha Kakkar',
      img: '/NK.png',
      duration: '3:45',
      color: {
        primary: getRandomTailwindColor(),
      },
    },
    {
      id: 4,
      name: 'Ali Zafar Mix',
      artists: 'Ali Zafar',
      img: '/AZ.png',
      duration: '4:50',
      color: {
        primary: getRandomTailwindColor(),
      },
    },
    {
      id: 5,
      name: 'Sonu Nigam Mix',
      artists: 'Sonu Nigam',
      img: '/SN.png',
      duration: '5:30',
      color: {
        primary: getRandomTailwindColor(),
      },
    },
    {
      id: 6,
      name: 'Teefa in Trouble',
      artists: 'Ali Zafar',
      img: '/TITA.png',
      duration: '4:20',
      color: {
        primary: getRandomTailwindColor(),
      },
    },
    {
      id: 7,
      name: 'Coke Studio',
      artists: 'Various Artists',
      img: '/AtifAslama.png',
      duration: '6:15',
      color: {
        primary: getRandomTailwindColor(),
      },
    }
  ];
  
  export const getSongs = () => {
    return SONGS
  }

  export const getSongById = (id) => {
    return SONGS.find(song => song.id === Number(id))
  }