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

const sharedAlbumPhotos = [
  { src: photo01Asset.url },
  { src: photo02Asset.url },
  { src: photo03Asset.url },
  { src: photo04Asset.url },
  { src: photo05Asset.url },
  { src: photo06Asset.url },
  { src: photo07Asset.url },
  { src: photo08Asset.url },
  { src: photo09Asset.url },
  { src: photo10Asset.url }
];

export const galleryAlbums: GalleryAlbum[] = [
  {
    slug: "master-s-praise-concert",
    title: "Master's Praise Concert",
    group: "Programs & Events",
    description: "An evening of praise, drama and live worship ministration.",
    driveUrl: DRIVE_ROOT_URL,
    photos: [
      { src: (sharedAlbumPhotos[0]?.src ?? ""), alt: "Master's Praise Concert — photo 1" },
      { src: (sharedAlbumPhotos[1]?.src ?? ""), alt: "Master's Praise Concert — photo 2" },
      { src: (sharedAlbumPhotos[2]?.src ?? ""), alt: "Master's Praise Concert — photo 3" },
      { src: (sharedAlbumPhotos[3]?.src ?? ""), alt: "Master's Praise Concert — photo 4" },
      { src: (sharedAlbumPhotos[4]?.src ?? ""), alt: "Master's Praise Concert — photo 5" },
      { src: (sharedAlbumPhotos[5]?.src ?? ""), alt: "Master's Praise Concert — photo 6" },
      { src: (sharedAlbumPhotos[6]?.src ?? ""), alt: "Master's Praise Concert — photo 7" },
    ],
  },
  {
    slug: "cultural-sunday-2024",
    title: "Cultural Sunday 2024",
    group: "Programs & Events",
    description: "Heritage, colour and worship as the parish celebrates culture.",
    driveUrl: DRIVE_ROOT_URL,
    photos: [
      { src: (sharedAlbumPhotos[7]?.src ?? ""), alt: "Cultural Sunday 2024 — photo 1" },
      { src: (sharedAlbumPhotos[8]?.src ?? ""), alt: "Cultural Sunday 2024 — photo 2" },
      { src: (sharedAlbumPhotos[9]?.src ?? ""), alt: "Cultural Sunday 2024 — photo 3" },
      { src: (sharedAlbumPhotos[0]?.src ?? ""), alt: "Cultural Sunday 2024 — photo 4" },
      { src: (sharedAlbumPhotos[1]?.src ?? ""), alt: "Cultural Sunday 2024 — photo 5" },
      { src: (sharedAlbumPhotos[2]?.src ?? ""), alt: "Cultural Sunday 2024 — photo 6" },
      { src: (sharedAlbumPhotos[3]?.src ?? ""), alt: "Cultural Sunday 2024 — photo 7" },
    ],
  },
  {
    slug: "christmas-carol-2023",
    title: "Christmas Carol 2023",
    group: "Programs & Events",
    description: "Carols, drama and celebration of the newborn King.",
    driveUrl: DRIVE_ROOT_URL,
    photos: [
      { src: (sharedAlbumPhotos[4]?.src ?? ""), alt: "Christmas Carol 2023 — photo 2" },
      { src: (sharedAlbumPhotos[5]?.src ?? ""), alt: "Christmas Carol 2023 — photo 3" },
      { src: (sharedAlbumPhotos[6]?.src ?? ""), alt: "Christmas Carol 2023 — photo 4" },
      { src: (sharedAlbumPhotos[7]?.src ?? ""), alt: "Christmas Carol 2023 — photo 6" },
      { src: (sharedAlbumPhotos[8]?.src ?? ""), alt: "Christmas Carol 2023 — photo 7" },
    ],
  },
  {
    slug: "family-weekend",
    title: "Family Weekend",
    group: "Programs & Events",
    description: "Games, feeding and fellowship across every generation.",
    driveUrl: DRIVE_ROOT_URL,
    photos: [
      { src: (sharedAlbumPhotos[9]?.src ?? ""), alt: "Family Weekend — photo 1" },
      { src: (sharedAlbumPhotos[0]?.src ?? ""), alt: "Family Weekend — photo 2" },
      { src: (sharedAlbumPhotos[1]?.src ?? ""), alt: "Family Weekend — photo 3" },
      { src: (sharedAlbumPhotos[2]?.src ?? ""), alt: "Family Weekend — photo 4" },
      { src: (sharedAlbumPhotos[3]?.src ?? ""), alt: "Family Weekend — photo 5" },
      { src: (sharedAlbumPhotos[4]?.src ?? ""), alt: "Family Weekend — photo 6" },
      { src: (sharedAlbumPhotos[5]?.src ?? ""), alt: "Family Weekend — photo 7" },
    ],
  },
  {
    slug: "fyb-sunday-28th-july-2024",
    title: "FYB Sunday · 28 July 2024",
    group: "Sunday Gatherings",
    description: "Another Feed Your Brother Sunday with the church family.",
    driveUrl: DRIVE_ROOT_URL,
    photos: [
      { src: (sharedAlbumPhotos[6]?.src ?? ""), alt: "FYB Sunday · 28 July 2024 — photo 1" },
      { src: (sharedAlbumPhotos[7]?.src ?? ""), alt: "FYB Sunday · 28 July 2024 — photo 2" },
      { src: (sharedAlbumPhotos[8]?.src ?? ""), alt: "FYB Sunday · 28 July 2024 — photo 3" },
      { src: (sharedAlbumPhotos[9]?.src ?? ""), alt: "FYB Sunday · 28 July 2024 — photo 4" },
      { src: (sharedAlbumPhotos[0]?.src ?? ""), alt: "FYB Sunday · 28 July 2024 — photo 5" },
      { src: (sharedAlbumPhotos[1]?.src ?? ""), alt: "FYB Sunday · 28 July 2024 — photo 6" },
      { src: (sharedAlbumPhotos[2]?.src ?? ""), alt: "FYB Sunday · 28 July 2024 — photo 7" },
    ],
  },
  {
    slug: "fyb-23rd-july-2023",
    title: "FYB Sunday · 23 July 2023",
    group: "Sunday Gatherings",
    description: "Feed Your Brother Sunday — giving, testimony and thanksgiving.",
    driveUrl: DRIVE_ROOT_URL,
    photos: [
      { src: (sharedAlbumPhotos[3]?.src ?? ""), alt: "FYB Sunday · 23 July 2023 — photo 1" },
      { src: (sharedAlbumPhotos[4]?.src ?? ""), alt: "FYB Sunday · 23 July 2023 — photo 2" },
      { src: (sharedAlbumPhotos[5]?.src ?? ""), alt: "FYB Sunday · 23 July 2023 — photo 3" },
      { src: (sharedAlbumPhotos[6]?.src ?? ""), alt: "FYB Sunday · 23 July 2023 — photo 4" },
      { src: (sharedAlbumPhotos[7]?.src ?? ""), alt: "FYB Sunday · 23 July 2023 — photo 5" },
      { src: (sharedAlbumPhotos[8]?.src ?? ""), alt: "FYB Sunday · 23 July 2023 — photo 6" },
      { src: (sharedAlbumPhotos[9]?.src ?? ""), alt: "FYB Sunday · 23 July 2023 — photo 7" },
    ],
  },
  {
    slug: "june-18th-2023",
    title: "Sunday Service · 18 June 2023",
    group: "Sunday Gatherings",
    description: "Welcome, testimony and worship at The Master's Place.",
    driveUrl: DRIVE_ROOT_URL,
    photos: [
      { src: (sharedAlbumPhotos[0]?.src ?? ""), alt: "Sunday Service · 18 June 2023 — photo 1" },
      { src: (sharedAlbumPhotos[1]?.src ?? ""), alt: "Sunday Service · 18 June 2023 — photo 2" },
      { src: (sharedAlbumPhotos[2]?.src ?? ""), alt: "Sunday Service · 18 June 2023 — photo 3" },
      { src: (sharedAlbumPhotos[3]?.src ?? ""), alt: "Sunday Service · 18 June 2023 — photo 4" },
      { src: (sharedAlbumPhotos[4]?.src ?? ""), alt: "Sunday Service · 18 June 2023 — photo 5" },
      { src: (sharedAlbumPhotos[5]?.src ?? ""), alt: "Sunday Service · 18 June 2023 — photo 6" },
      { src: (sharedAlbumPhotos[6]?.src ?? ""), alt: "Sunday Service · 18 June 2023 — photo 7" },
    ],
  },
  {
    slug: "june-4th-2023",
    title: "Sunday Service · 4 June 2023",
    group: "Sunday Gatherings",
    description: "Praise, prayer and the ministry of the Word.",
    driveUrl: DRIVE_ROOT_URL,
    photos: [
      { src: (sharedAlbumPhotos[7]?.src ?? ""), alt: "Sunday Service · 4 June 2023 — photo 1" },
      { src: (sharedAlbumPhotos[8]?.src ?? ""), alt: "Sunday Service · 4 June 2023 — photo 2" },
      { src: (sharedAlbumPhotos[9]?.src ?? ""), alt: "Sunday Service · 4 June 2023 — photo 3" },
      { src: (sharedAlbumPhotos[0]?.src ?? ""), alt: "Sunday Service · 4 June 2023 — photo 4" },
      { src: (sharedAlbumPhotos[1]?.src ?? ""), alt: "Sunday Service · 4 June 2023 — photo 5" },
      { src: (sharedAlbumPhotos[2]?.src ?? ""), alt: "Sunday Service · 4 June 2023 — photo 6" },
      { src: (sharedAlbumPhotos[3]?.src ?? ""), alt: "Sunday Service · 4 June 2023 — photo 7" },
    ],
  },
  {
    slug: "may-28th-2023",
    title: "Sunday Service · 28 May 2023",
    group: "Sunday Gatherings",
    description: "A farewell Sunday marked with prayer and thanksgiving.",
    driveUrl: DRIVE_ROOT_URL,
    photos: [
      { src: (sharedAlbumPhotos[4]?.src ?? ""), alt: "Sunday Service · 28 May 2023 — photo 1" },
      { src: (sharedAlbumPhotos[5]?.src ?? ""), alt: "Sunday Service · 28 May 2023 — photo 2" },
      { src: (sharedAlbumPhotos[6]?.src ?? ""), alt: "Sunday Service · 28 May 2023 — photo 3" },
      { src: (sharedAlbumPhotos[7]?.src ?? ""), alt: "Sunday Service · 28 May 2023 — photo 4" },
      { src: (sharedAlbumPhotos[8]?.src ?? ""), alt: "Sunday Service · 28 May 2023 — photo 5" },
      { src: (sharedAlbumPhotos[9]?.src ?? ""), alt: "Sunday Service · 28 May 2023 — photo 6" },
      { src: (sharedAlbumPhotos[0]?.src ?? ""), alt: "Sunday Service · 28 May 2023 — photo 7" },
    ],
  },
  {
    slug: "may-14th-2023",
    title: "Sunday Service · 14 May 2023",
    group: "Sunday Gatherings",
    description: "Choir ministration and corporate prayer.",
    driveUrl: DRIVE_ROOT_URL,
    photos: [
      { src: (sharedAlbumPhotos[1]?.src ?? ""), alt: "Sunday Service · 14 May 2023 — photo 1" },
      { src: (sharedAlbumPhotos[2]?.src ?? ""), alt: "Sunday Service · 14 May 2023 — photo 2" },
      { src: (sharedAlbumPhotos[3]?.src ?? ""), alt: "Sunday Service · 14 May 2023 — photo 3" },
      { src: (sharedAlbumPhotos[4]?.src ?? ""), alt: "Sunday Service · 14 May 2023 — photo 4" },
      { src: (sharedAlbumPhotos[5]?.src ?? ""), alt: "Sunday Service · 14 May 2023 — photo 5" },
      { src: (sharedAlbumPhotos[6]?.src ?? ""), alt: "Sunday Service · 14 May 2023 — photo 6" },
      { src: (sharedAlbumPhotos[7]?.src ?? ""), alt: "Sunday Service · 14 May 2023 — photo 7" },
    ],
  },
];

export const galleryHighlights: GalleryPhoto[] = [
  galleryAlbums[0]!.photos[0]!,
  galleryAlbums[1]!.photos[1]!,
  galleryAlbums[4]!.photos[2]!,
  galleryAlbums[3]!.photos[0]!,
  galleryAlbums[6]!.photos[0]!,
  galleryAlbums[2]!.photos[1]!,
];
