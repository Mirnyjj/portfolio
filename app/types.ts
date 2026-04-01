export interface SanityProject {
  _id: string;
  title: string;
  slug?: {
    current: string;
  };
  description: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
  image?: {
    asset: {
      _ref: string;
    };
  } | null;
}

export interface GeoProps {
  ip: string;
  country: string;
  region: string;
  city: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

export interface GeoResApi {
  city_name: string;
  country_name: string;
  latitude: string;
  longitude: string;
}
export interface UserResApiGeo {
  user: {
    city: string;
    country: string;
    lat: number;
    lng: number;
  };
  route: [number, number][];
}

export interface CardProps {
  position: [number, number, number];
  rotation: [number, number, number];
  speed: number;
  content: React.ReactNode;
}
