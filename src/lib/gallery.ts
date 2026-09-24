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
  { src: photo01Asset.url, alt: "Members of RCCG The Master's Place — photo 1" },
  { src: photo02Asset.url, alt: "Worship at RCCG The Master's Place — photo 2" },
  { src: photo03Asset.url, alt: "A member worshipping at RCCG The Master's Place — photo 3" },
  { src: photo04Asset.url, alt: "Congregational worship at RCCG The Master's Place — photo 4" },
  { src: photo05Asset.url, alt: "A joyful moment at RCCG The Master's Place — photo 5" },
  { src: photo06Asset.url, alt: "Teaching at RCCG The Master's Place — photo 6" },
  { src: photo07Asset.url, alt: "A message at RCCG The Master's Place — photo 7" },
  { src: photo08Asset.url, alt: "The congregation at RCCG The Master's Place — photo 8" },
  { src: photo09Asset.url, alt: "Members of RCCG The Master's Place — photo 9" },
  { src: photo10Asset.url, alt: "Members of RCCG The Master's Place — photo 10" },
];

export const galleryAlbums: GalleryAlbum[] = [
  {
    slug: "life-at-the-masters-place",
    title: "Life at The Master's Place",
    group: "Programs & Events",
    description: "Worship, teaching and fellowship with our church family.",
    driveUrl: DRIVE_ROOT_URL,
    photos: sharedAlbumPhotos,
  },
];

export const galleryHighlights: GalleryPhoto[] = sharedAlbumPhotos.slice(0, 6);