export interface Content {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  banner: string;
  videoUrl: string;
  genre: string[];
  year: number;
  rating: string;
  duration: string;
  type: 'movie' | 'series';
}

export const mockContent: Content[] = [
  {
    id: '1',
    title: 'Stranger Things',
    description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
    thumbnail: 'https://images.unsplash.com/photo-1574267432644-f26c3d2b5999?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1574267432644-f26c3d2b5999?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    genre: ['Sci-Fi', 'Horror', 'Drama'],
    year: 2016,
    rating: 'TV-14',
    duration: '51m',
    type: 'series',
  },
  {
    id: '2',
    title: 'The Crown',
    description: 'Follows the political rivalries and romance of Queen Elizabeth IIs reign and the events that shaped the second half of the 20th century.',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    genre: ['Drama', 'Historical'],
    year: 2016,
    rating: 'TV-MA',
    duration: '58m',
    type: 'series',
  },
  {
    id: '3',
    title: 'Breaking Bad',
    description: 'A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his familys future.',
    thumbnail: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    genre: ['Crime', 'Drama', 'Thriller'],
    year: 2008,
    rating: 'TV-MA',
    duration: '49m',
    type: 'series',
  },
  {
    id: '4',
    title: 'The Witcher',
    description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
    thumbnail: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    genre: ['Fantasy', 'Adventure', 'Action'],
    year: 2019,
    rating: 'TV-MA',
    duration: '60m',
    type: 'series',
  },
  {
    id: '5',
    title: 'Money Heist',
    description: 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.',
    thumbnail: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    genre: ['Crime', 'Thriller', 'Drama'],
    year: 2017,
    rating: 'TV-MA',
    duration: '70m',
    type: 'series',
  },
  {
    id: '6',
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.',
    thumbnail: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    genre: ['Sci-Fi', 'Thriller', 'Action'],
    year: 2010,
    rating: 'PG-13',
    duration: '2h 28m',
    type: 'movie',
  },
  {
    id: '7',
    title: 'Dark',
    description: 'A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.',
    thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    genre: ['Sci-Fi', 'Mystery', 'Thriller'],
    year: 2017,
    rating: 'TV-MA',
    duration: '60m',
    type: 'series',
  },
  {
    id: '8',
    title: 'Narcos',
    description: 'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country.',
    thumbnail: 'https://images.unsplash.com/photo-1574267432644-f26c3d2b5999?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1574267432644-f26c3d2b5999?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    genre: ['Crime', 'Drama', 'Thriller'],
    year: 2015,
    rating: 'TV-MA',
    duration: '49m',
    type: 'series',
  },
  {
    id: '9',
    title: 'Ozark',
    description: 'A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.',
    thumbnail: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    genre: ['Crime', 'Drama', 'Thriller'],
    year: 2017,
    rating: 'TV-MA',
    duration: '60m',
    type: 'series',
  },
  {
    id: '10',
    title: 'The Mandalorian',
    description: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
    thumbnail: 'https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    genre: ['Sci-Fi', 'Action', 'Adventure'],
    year: 2019,
    rating: 'TV-PG',
    duration: '40m',
    type: 'series',
  },
  {
    id: '11',
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.',
    thumbnail: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    genre: ['Sci-Fi', 'Drama', 'Adventure'],
    year: 2014,
    rating: 'PG-13',
    duration: '2h 49m',
    type: 'movie',
  },
  {
    id: '12',
    title: 'Peaky Blinders',
    description: 'A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps.',
    thumbnail: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    genre: ['Crime', 'Drama'],
    year: 2013,
    rating: 'TV-MA',
    duration: '60m',
    type: 'series',
  },
  {
    id: '13',
    title: 'The Matrix',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    thumbnail: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    genre: ['Sci-Fi', 'Action'],
    year: 1999,
    rating: 'R',
    duration: '2h 16m',
    type: 'movie',
  },
  {
    id: '14',
    title: 'Vikings',
    description: 'Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore.',
    thumbnail: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    genre: ['Action', 'Adventure', 'Drama'],
    year: 2013,
    rating: 'TV-MA',
    duration: '44m',
    type: 'series',
  },
  {
    id: '15',
    title: 'Black Mirror',
    description: 'An anthology series exploring a twisted, high-tech multiverse where humanitys greatest innovations and darkest instincts collide.',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    genre: ['Sci-Fi', 'Thriller', 'Drama'],
    year: 2011,
    rating: 'TV-MA',
    duration: '60m',
    type: 'series',
  },
  {
    id: '16',
    title: 'Dune',
    description: 'A noble family becomes embroiled in a war for control over the galaxys most valuable asset while its heir becomes troubled by visions.',
    thumbnail: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    genre: ['Sci-Fi', 'Adventure', 'Drama'],
    year: 2021,
    rating: 'PG-13',
    duration: '2h 35m',
    type: 'movie',
  },
  {
    id: '17',
    title: 'The Last of Us',
    description: 'After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanitys last hope.',
    thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    genre: ['Drama', 'Action', 'Sci-Fi'],
    year: 2023,
    rating: 'TV-MA',
    duration: '60m',
    type: 'series',
  },
  {
    id: '18',
    title: 'The Batman',
    description: 'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the citys hidden corruption.',
    thumbnail: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    genre: ['Action', 'Crime', 'Drama'],
    year: 2022,
    rating: 'PG-13',
    duration: '2h 56m',
    type: 'movie',
  },
  {
    id: '19',
    title: 'Game of Thrones',
    description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
    thumbnail: 'https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    genre: ['Fantasy', 'Drama', 'Adventure'],
    year: 2011,
    rating: 'TV-MA',
    duration: '57m',
    type: 'series',
  },
  {
    id: '20',
    title: 'Squid Game',
    description: 'Hundreds of cash-strapped contestants accept an invitation to compete in childrens games for a tempting prize, but the stakes are deadly.',
    thumbnail: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    genre: ['Thriller', 'Drama', 'Action'],
    year: 2021,
    rating: 'TV-MA',
    duration: '60m',
    type: 'series',
  },
  {
    id: '21',
    title: 'Blade Runner 2049',
    description: 'Young Blade Runner Ks discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.',
    thumbnail: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    genre: ['Sci-Fi', 'Thriller', 'Drama'],
    year: 2017,
    rating: 'R',
    duration: '2h 44m',
    type: 'movie',
  },
  {
    id: '22',
    title: 'Wednesday',
    description: 'Follows Wednesday Addams years as a student, when she attempts to master her emerging psychic ability and solve a mystery.',
    thumbnail: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    genre: ['Comedy', 'Fantasy', 'Mystery'],
    year: 2022,
    rating: 'TV-14',
    duration: '50m',
    type: 'series',
  },
  {
    id: '23',
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    thumbnail: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    genre: ['Drama'],
    year: 1994,
    rating: 'R',
    duration: '2h 22m',
    type: 'movie',
  },
  {
    id: '24',
    title: 'Avatar: The Last Airbender',
    description: 'A young boy known as the Avatar must master the four elemental powers to save the world, and fight against an enemy bent on stopping him.',
    thumbnail: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=225&fit=crop',
    banner: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=1920&h=1080&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    genre: ['Animation', 'Action', 'Adventure'],
    year: 2024,
    rating: 'TV-PG',
    duration: '55m',
    type: 'series',
  },
];

export const getContentByGenre = (genre: string) => {
  return mockContent.filter(content => content.genre.includes(genre));
};

export const getFeaturedContent = () => {
  return mockContent[0];
};

export const getMyList = (): Content[] => {
  const myList = localStorage.getItem('netflix_my_list');
  if (!myList) return [];
  const ids = JSON.parse(myList) as string[];
  return mockContent.filter(content => ids.includes(content.id));
};

export const addToMyList = (id: string) => {
  const myList = localStorage.getItem('netflix_my_list');
  const ids = myList ? JSON.parse(myList) : [];
  if (!ids.includes(id)) {
    ids.push(id);
    localStorage.setItem('netflix_my_list', JSON.stringify(ids));
  }
};

export const removeFromMyList = (id: string) => {
  const myList = localStorage.getItem('netflix_my_list');
  if (!myList) return;
  const ids = JSON.parse(myList) as string[];
  const filtered = ids.filter(itemId => itemId !== id);
  localStorage.setItem('netflix_my_list', JSON.stringify(filtered));
};

export const isInMyList = (id: string): boolean => {
  const myList = localStorage.getItem('netflix_my_list');
  if (!myList) return false;
  const ids = JSON.parse(myList) as string[];
  return ids.includes(id);
};
