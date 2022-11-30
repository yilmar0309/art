export interface ArtEntity {
  id: number;
  is_boosted: boolean;
  title: string;
  alt_titles: string;
  thumbnail: Thumbnail;
  artist_display: string;
  image_id: string;
  artist_title: string;
  credit_line: string;
  dimensions: string;
}

interface Thumbnail {
  lqip: string;
  width: number;
  height: number;
  alt_text: string;
}
