export interface RecordSearchResponse {
  pagination: Pagination;
  results: Record[];
}

export interface Pagination {
  page: number;
  pages: number;
  per_page: number;
  items: number;
  urls: Urls;
}

export interface Urls {
  last: string;
  next: string;
}

export interface Record {
  country: string;
  year?: string;
  format: string[];
  label: string[];
  type: Type;
  genre: Genre[];
  style: string[];
  id: number;
  barcode: string[];
  master_id: number;
  master_url: null | string;
  uri: string;
  catno: string;
  title: string;
  thumb: string;
  cover_image: string;
  resource_url: string;
  community: Community;
  format_quantity: number;
  formats: Format[];
}

export interface Community {
  want: number;
  have: number;
}

export interface Format {
  name: Name;
  qty: string;
  descriptions: string[];
  text?: string;
}

export enum Name {
  AllMedia = "All Media",
  BluRay = "Blu-ray",
  CD = "CD",
  Vinyl = "Vinyl",
}

export enum Genre {
  Electronic = "Electronic",
  FunkSoul = "Funk / Soul",
  HipHop = "Hip Hop",
  Pop = "Pop",
  Rock = "Rock",
}

export enum Type {
  Release = "release",
}
