import photo01Asset from "@/assets/gallery-new/masters-place-01.jpg.asset.json";
import photo02Asset from "@/assets/gallery-new/masters-place-02.jpg.asset.json";
import photo03Asset from "@/assets/gallery-new/masters-place-03.jpg.asset.json";
import photo04Asset from "@/assets/gallery-new/masters-place-04.jpg.asset.json";
import photo05Asset from "@/assets/gallery-new/masters-place-05.jpg.asset.json";
import photo06Asset from "@/assets/gallery-new/masters-place-06.jpg.asset.json";
import photo07Asset from "@/assets/gallery-new/masters-place-07.jpg.asset.json";
import photo08Asset from "@/assets/gallery-new/masters-place-08.jpg.asset.json";
import photo09Asset from "@/assets/gallery-new/masters-place-09.jpg.asset.json";
import photo10Asset from "@/assets/gallery-new/masters-place-10.jpg.asset.json";


export interface GalleryPhoto {
  src: string;
  alt: string;
}

export interface GalleryAlbum {
  slug: string;
  title: string;
  group: string;
  description: string;
  driveUrl: string;
  photos: GalleryPhoto[];
}

export const DRIVE_ROOT_URL = "https://photos.app.goo.gl/bP3mL8BXVtMUikAf8";

const sharedAlbumPhotos: GalleryPhoto[] = [
  { src: photo01Asset.url, alt: "A recent moment at RCCG The Master's Place" },
  { src: photo02Asset.url, alt: "Church family at RCCG The Master's Place" },
  { src: photo03Asset.url, alt: "A recent gathering at RCCG The Master's Place" },
  { src: photo04Asset.url, alt: "Fellowship at RCCG The Master's Place" },
  { src: photo05Asset.url, alt: "Life at RCCG The Master's Place" },
  { src: photo06Asset.url, alt: "A joyful moment at RCCG The Master's Place" },
  { src: photo07Asset.url, alt: "The Master's Place church community" },
  { src: photo08Asset.url, alt: "A recent church gathering in Ile-Ife" },
  { src: photo09Asset.url, alt: "Worship and fellowship at The Master's Place" },
  { src: photo10Asset.url, alt: "A recent photo from The Master's Place" },
];

export const galleryAlbums: GalleryAlbum[] = [
  {
    slug: "recent-moments",
    title: "Recent Moments",
    group: "Life at The Master's Place",
    description: "A glimpse of our church family, worship and fellowship in Ile-Ife.",
    driveUrl: DRIVE_ROOT_URL,
    photos: sharedAlbumPhotos,
  },
];

export const galleryHighlights: GalleryPhoto[] = sharedAlbumPhotos.slice(0, 6);
