export interface HeroImageItem {
  id: number;
  title: string;
  category: string;
  image: string;
  unsplashUrl: string;
  gradient: string;
}

export const HERO_IMAGES: HeroImageItem[] = [
  {
    id: 1,
    title: "Aetheria",
    category: "INTERACTIVE DESIGN",
    image: "/images/hero/project-1.jpg",
    unsplashUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    gradient: "from-blue-600/20 to-purple-600/20",
  },
  {
    id: 2,
    title: "Helios",
    category: "CREATIVE EXPERIENCE",
    image: "/images/hero/project-2.jpg",
    unsplashUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80",
    gradient: "from-yellow-600/20 to-amber-600/20",
  },
  {
    id: 3,
    title: "Nova Corp",
    category: "DIGITAL IDENTITY",
    image: "/images/hero/project-3.jpg",
    unsplashUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    gradient: "from-cyan-600/20 to-teal-600/20",
  },
  {
    id: 4,
    title: "Zephyr Lab",
    category: "WEBGL PORTAL",
    image: "/images/hero/project-4.jpg",
    unsplashUrl: "https://images.unsplash.com/photo-1618005198143-e5283b519a7f?auto=format&fit=crop&w=600&q=80",
    gradient: "from-emerald-600/20 to-green-600/20",
  },
  {
    id: 5,
    title: "Echoes",
    category: "ART DIRECTION",
    image: "/images/hero/project-5.jpg",
    unsplashUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80",
    gradient: "from-rose-600/20 to-orange-600/20",
  },
  {
    id: 6,
    title: "Nebula",
    category: "3D COLLABORATION",
    image: "/images/hero/project-6.jpg",
    unsplashUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80",
    gradient: "from-indigo-600/20 to-violet-600/20",
  },
];

export default HERO_IMAGES;
