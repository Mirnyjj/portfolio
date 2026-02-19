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
