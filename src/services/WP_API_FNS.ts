import { Author, Post, Term } from '@/lib';

const domain = process.env.WP_API_URL || 'http://localhost:8881';
const apiPath = process.env.WP_API_ROUTE || '/wp-json/wp/v2';

export const getPosts = async (max: number = 12) => {
  try {
    const res = await fetch(
      `${domain + apiPath}/posts?per_page=${max}&_embed`,
      {
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
    }
    const data: Post[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const getPostBySlug = async (slug: string) => {
  try {
    const res = await fetch(`${domain + apiPath}/posts?slug=${slug}&_embed`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
    }
    const data: Post[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const getAllPosts = async () => {
  try {
    const res = await fetch(
      `${domain + apiPath}/posts?per_page=10&page=1&_embed`
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
    }
    const data: Post[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const getCategories = async () => {
  try {
    const res = await fetch(`${domain + apiPath}/categories`);
    if (!res.ok) {
      throw new Error(
        `Failed to fetch categories: ${res.status} ${res.statusText}`
      );
    }
    const data: Term[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const getTags = async () => {
  try {
    const res = await fetch(`${domain + apiPath}/tags`);
    if (!res.ok) {
      throw new Error(`Failed to fetch tags: ${res.status} ${res.statusText}`);
    }
    const data: Term[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
};

export const getRelatedPostsByAuthor = async (authorId: number) => {
  try {
    const res = await fetch(
      `${domain + apiPath}/posts?per_page=3&author=${authorId}&_embed`
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
    }
    const data: Post[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const getUsers = async (max: number = 10) => {
  try {
    const res = await fetch(`${domain + apiPath}/users?per_page=${max}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch users: ${res.status} ${res.statusText}`);
    }
    const data: Author[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};
