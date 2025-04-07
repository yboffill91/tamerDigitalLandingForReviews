interface Guid {
  rendered: string;
}

interface Title {
  rendered: string;
}

interface Content {
  rendered: string;
  protected: boolean;
}

interface Excerpt {
  rendered: string;
  protected: boolean;
}

interface Meta {
  footnotes: string;
}

interface Links {
  self: Array<{
    href: string;
    targetHints?: {
      allow: string[];
    };
  }>;
  collection: Array<{
    href: string;
  }>;
  about: Array<{
    href: string;
  }>;
  author: Array<{
    embeddable: boolean;
    href: string;
  }>;
  replies: Array<{
    embeddable: boolean;
    href: string;
  }>;
  'version-history': Array<{
    count: number;
    href: string;
  }>;
  'predecessor-version': Array<{
    id: number;
    href: string;
  }>;
  'wp:featuredmedia': Array<{
    embeddable: boolean;
    href: string;
  }>;
  'wp:attachment': Array<{
    href: string;
  }>;
  'wp:term': Array<{
    taxonomy: string;
    embeddable: boolean;
    href: string;
  }>;
  curies: Array<{
    name: string;
    href: string;
    templated: boolean;
  }>;
}

export interface Author {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: {
    '24': string;
    '48': string;
    '96': string;
  };
  _links: {
    self: Array<{
      href: string;
      targetHints?: {
        allow: string[];
      };
    }>;
    collection: Array<{
      href: string;
    }>;
  };
}

interface MediaDetails {
  width: number;
  height: number;
  file: string;
  filesize: number;
  sizes: {
    medium: {
      file: string;
      width: number;
      height: number;
      filesize: number;
      mime_type: string;
      source_url: string;
    };
    large: {
      file: string;
      width: number;
      height: number;
      filesize: number;
      mime_type: string;
      source_url: string;
    };
    thumbnail: {
      file: string;
      width: number;
      height: number;
      filesize: number;
      mime_type: string;
      source_url: string;
    };
    medium_large: {
      file: string;
      width: number;
      height: number;
      filesize: number;
      mime_type: string;
      source_url: string;
    };
    '1536x1536': {
      file: string;
      width: number;
      height: number;
      filesize: number;
      mime_type: string;
      source_url: string;
    };
    '2048x2048': {
      file: string;
      width: number;
      height: number;
      filesize: number;
      mime_type: string;
      source_url: string;
    };
    full: {
      file: string;
      width: number;
      height: number;
      mime_type: string;
      source_url: string;
    };
  };
  image_meta: {
    aperture: string;
    credit: string;
    camera: string;
    caption: string;
    created_timestamp: string;
    copyright: string;
    focal_length: string;
    iso: string;
    shutter_speed: string;
    title: string;
    orientation: string;
    keywords: string[];
  };
}

interface FeaturedMedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: Title;
  author: number;
  featured_media: number;
  caption: {
    rendered: string;
  };
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: MediaDetails;
  source_url: string;
  _links: Links;
}

export interface Term {
  id: number;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  _links: Links;
}

interface Embedded {
  author: Author[];
  'wp:featuredmedia': FeaturedMedia[];
  'wp:term': Term[][];
}

export interface Post {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Title;
  content: Content;
  excerpt: Excerpt;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Meta;
  categories: number[];
  tags: number[];
  class_list: string[];
  _links: Links;
  _embedded: Embedded;
}
