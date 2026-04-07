export type Project = {
  title: string;
  description: string;
  stack: string[];
  image: string;
  link: string;
};

export interface CardProps {
  position: number[];
  rotation: [number, number, number];
  speed: number;
  radius: number;
  angleOffset: number;
  content: React.ReactNode;
  bgColor: string;
}
