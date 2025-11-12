const TMDB_API_KEY = '488a04f0f0459bb0fa94f5c9774dcbbc';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export interface TMDBMovie {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  genre_ids: number[];
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  media_type?: 'movie' | 'tv';
}

export interface Cast {
  id: number;
  name: string;
  character?: string;
  job?: string;
  profile_path: string | null;
}

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
  slug?: string;
  releaseDate?: string;
  voteAverage?: number;
  voteCount?: number;
  cast?: Cast[];
  crew?: Cast[];
  director?: string;
  images?: string[];
  trailerKey?: string;
}

const genreMap: { [key: number]: string } = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Sci-Fi',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

const transformTMDBToContent = (item: any): Content => {
  const title = item.title || item.name || 'Untitled';
  const releaseDate = item.release_date || item.first_air_date || '';
  const year = releaseDate ? new Date(releaseDate).getFullYear() : 2024;
  const type = item.media_type === 'tv' || item.name ? 'series' : 'movie';
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  
  // Handle both genre_ids (from lists) and genres (from individual item details)
  let genres: string[] = [];
  if (item.genre_ids && Array.isArray(item.genre_ids)) {
    genres = item.genre_ids.map((id: number) => genreMap[id]).filter(Boolean);
  } else if (item.genres && Array.isArray(item.genres)) {
    genres = item.genres.map((g: any) => g.name);
  }
  
  return {
    id: item.id?.toString() || '0',
    title,
    description: item.overview || 'No description available.',
    thumbnail: item.poster_path
      ? `${TMDB_IMAGE_BASE_URL}/w500${item.poster_path}`
      : 'https://via.placeholder.com/500x750?text=No+Image',
    banner: item.backdrop_path
      ? `${TMDB_IMAGE_BASE_URL}/original${item.backdrop_path}`
      : 'https://via.placeholder.com/1920x1080?text=No+Image',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    genre: genres,
    year,
    rating: item.vote_average >= 7 ? 'TV-MA' : 'TV-14',
    duration: type === 'series' ? '45m' : '2h',
    type,
    slug,
  };
};

export const getTrending = async (): Promise<Content[]> => {
  const response = await fetch(
    `${TMDB_BASE_URL}/trending/all/week?api_key=${TMDB_API_KEY}`
  );
  const data = await response.json();
  return data.results.slice(0, 20).map(transformTMDBToContent);
};

export const getPopularMovies = async (): Promise<Content[]> => {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`
  );
  const data = await response.json();
  return data.results.slice(0, 20).map((item: TMDBMovie) => 
    transformTMDBToContent({ ...item, media_type: 'movie' })
  );
};

export const getPopularSeries = async (): Promise<Content[]> => {
  const response = await fetch(
    `${TMDB_BASE_URL}/tv/popular?api_key=${TMDB_API_KEY}`
  );
  const data = await response.json();
  return data.results.slice(0, 20).map((item: TMDBMovie) => 
    transformTMDBToContent({ ...item, media_type: 'tv' })
  );
};

export const getContentByGenre = async (genreId: number, mediaType: 'movie' | 'tv' = 'movie'): Promise<Content[]> => {
  const endpoint = mediaType === 'movie' ? 'movie' : 'tv';
  const response = await fetch(
    `${TMDB_BASE_URL}/discover/${endpoint}?api_key=${TMDB_API_KEY}&with_genres=${genreId}&sort_by=popularity.desc`
  );
  const data = await response.json();
  return data.results.slice(0, 20).map((item: TMDBMovie) => 
    transformTMDBToContent({ ...item, media_type: mediaType })
  );
};

export const searchContent = async (query: string): Promise<Content[]> => {
  const response = await fetch(
    `${TMDB_BASE_URL}/search/multi?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results
    .filter((item: TMDBMovie) => item.poster_path)
    .slice(0, 20)
    .map(transformTMDBToContent);
};

// LocalStorage functions for My List
export const getMyList = (): string[] => {
  const myList = localStorage.getItem('netflix_my_list');
  return myList ? JSON.parse(myList) : [];
};

export const addToMyList = (id: string) => {
  const myList = getMyList();
  if (!myList.includes(id)) {
    myList.push(id);
    localStorage.setItem('netflix_my_list', JSON.stringify(myList));
  }
};

export const removeFromMyList = (id: string) => {
  const myList = getMyList();
  const filtered = myList.filter(itemId => itemId !== id);
  localStorage.setItem('netflix_my_list', JSON.stringify(filtered));
};

export const isInMyList = (id: string): boolean => {
  const myList = getMyList();
  return myList.includes(id);
};

export const getContentTrailer = async (id: string, type: 'movie' | 'series'): Promise<string | null> => {
  try {
    const endpoint = type === 'movie' ? 'movie' : 'tv';
    const response = await fetch(
      `${TMDB_BASE_URL}/${endpoint}/${id}/videos?api_key=${TMDB_API_KEY}`
    );
    const data = await response.json();
    const trailer = data.results?.find(
      (video: any) => video.type === 'Trailer' && video.site === 'YouTube'
    );
    return trailer?.key || null;
  } catch (error) {
    console.error('Error fetching trailer:', error);
    return null;
  }
};

export const getTopRatedMovies = async (): Promise<Content[]> => {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}`
  );
  const data = await response.json();
  return data.results.slice(0, 20).map((item: TMDBMovie) => 
    transformTMDBToContent({ ...item, media_type: 'movie' })
  );
};

export const getTopRatedSeries = async (): Promise<Content[]> => {
  const response = await fetch(
    `${TMDB_BASE_URL}/tv/top_rated?api_key=${TMDB_API_KEY}`
  );
  const data = await response.json();
  return data.results.slice(0, 20).map((item: TMDBMovie) => 
    transformTMDBToContent({ ...item, media_type: 'tv' })
  );
};

export const getUpcomingMovies = async (): Promise<Content[]> => {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}`
  );
  const data = await response.json();
  return data.results.slice(0, 20).map((item: TMDBMovie) => 
    transformTMDBToContent({ ...item, media_type: 'movie' })
  );
};

export const getNowPlayingMovies = async (): Promise<Content[]> => {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}`
  );
  const data = await response.json();
  return data.results.slice(0, 20).map((item: TMDBMovie) => 
    transformTMDBToContent({ ...item, media_type: 'movie' })
  );
};

export const getContentById = async (id: string, type: 'movie' | 'tv'): Promise<Content | null> => {
  try {
    const endpoint = type === 'movie' ? 'movie' : 'tv';
    
    // Récupérer les détails du contenu
    const detailsResponse = await fetch(
      `${TMDB_BASE_URL}/${endpoint}/${id}?api_key=${TMDB_API_KEY}`
    );
    const details = await detailsResponse.json();
    
    // Récupérer le casting et l'équipe
    const creditsResponse = await fetch(
      `${TMDB_BASE_URL}/${endpoint}/${id}/credits?api_key=${TMDB_API_KEY}`
    );
    const credits = await creditsResponse.json();
    
    // Récupérer les images
    const imagesResponse = await fetch(
      `${TMDB_BASE_URL}/${endpoint}/${id}/images?api_key=${TMDB_API_KEY}`
    );
    const imagesData = await imagesResponse.json();
    
    // Récupérer la bande-annonce
    const videosResponse = await fetch(
      `${TMDB_BASE_URL}/${endpoint}/${id}/videos?api_key=${TMDB_API_KEY}`
    );
    const videos = await videosResponse.json();
    const trailer = videos.results?.find(
      (video: any) => video.type === 'Trailer' && video.site === 'YouTube'
    );
    
    const content = transformTMDBToContent({ ...details, media_type: type === 'movie' ? 'movie' : 'tv' });
    
    // Ajouter le casting (limité à 10 acteurs principaux)
    content.cast = credits.cast?.slice(0, 10).map((person: any) => ({
      id: person.id,
      name: person.name,
      character: person.character,
      profile_path: person.profile_path,
    }));
    
    // Ajouter l'équipe (réalisateur, producteur, scénariste)
    content.crew = credits.crew?.filter((person: any) => 
      ['Director', 'Producer', 'Executive Producer', 'Writer', 'Screenplay'].includes(person.job)
    ).slice(0, 10).map((person: any) => ({
      id: person.id,
      name: person.name,
      job: person.job,
      profile_path: person.profile_path,
    }));
    
    // Trouver le réalisateur
    content.director = credits.crew?.find((person: any) => person.job === 'Director')?.name;
    
    // Ajouter les images (backdrops)
    content.images = imagesData.backdrops?.slice(0, 10).map((img: any) => 
      `${TMDB_IMAGE_BASE_URL}/w780${img.file_path}`
    );
    
    // Ajouter la clé de la bande-annonce
    content.trailerKey = trailer?.key || null;
    
    // Ajouter les notes et date de sortie
    content.voteAverage = details.vote_average;
    content.voteCount = details.vote_count;
    content.releaseDate = details.release_date || details.first_air_date;
    
    return content;
  } catch (error) {
    console.error('Error fetching content:', error);
    return null;
  }
};
